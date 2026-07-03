import './styles.css';
import { KrimsCodeClient } from './sdk.js';

const app = document.getElementById('app');
const client = new KrimsCodeClient();

if (app) {
  app.innerHTML = `
    <div class="wrap">
      <header class="topbar">
        <a class="brand" href="#">
          <img src="/logo.png" alt="Krims Code logo" />
          <span>Krims Code</span>
        </a>
        <nav class="nav">
          <a href="#features">Features</a>
          <a href="#product">Product</a>
          <a href="#sdk">SDK</a>
          <a href="https://github.com/Krylo-60/krims-code-ide" target="_blank">GitHub</a>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">AI-native developer platform</p>
          <h1>Build, debug, and ship with <span class="accent">Krims Code</span>.</h1>
          <p>An IDE, CLI, and SDK fused into one premium workflow for modern developers.</p>
          <div class="actions">
            <a class="btn primary" href="https://github.com/Krylo-60/krims-code-ide" target="_blank">View GitHub</a>
            <a class="btn secondary" href="#sdk">Explore SDK</a>
          </div>
        </div>
        <div class="hero-card">
          <div class="terminal-window">
            <div class="terminal-bar"><span></span><span></span><span></span></div>
            <div class="terminal-body">
              <div class="terminal-line"><span class="prompt">$</span> krims-code chat</div>
              <div class="terminal-line"><span class="prompt">$</span> krims-code ask "Refactor this module"</div>
              <div class="terminal-line"><span class="prompt">$</span> krims-code diagnose --project .</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="features">
        <h2>Everything you need to stay in flow.</h2>
        <div class="grid">
          <article class="card">Terminal-first workflow</article>
          <article class="card">Desktop IDE shell</article>
          <article class="card">SDK-ready architecture</article>
          <article class="card">Smart diagnostics</article>
          <article class="card">Multi-provider AI</article>
          <article class="card">Fast local experience</article>
        </div>
      </section>

      <section class="section" id="product">
        <h2>Product preview</h2>
        <div class="mockup-shell">
          <div class="mockup-window">
            <aside class="mockup-sidebar"></aside>
            <div class="mockup-content">
              <div class="mockup-editor">
                <div class="editor-top"><span>main.ts</span><span>●●●</span></div>
                <div class="editor-body">
                  <span class="line"><span class="accent">const</span> workflow = createSession();</span>
                  <span class="line"><span class="accent">await</span> workflow.run();</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="sdk">
        <h2>SDK starter</h2>
        <div class="sdk-panel">
          <div class="panel-card">
            <h3>Health check</h3>
            <p>Use the SDK to verify your environment and initialize a session quickly.</p>
          </div>
          <div class="panel-card">
            <h3>Prompt execution</h3>
            <p>Send prompts programmatically and attach them to your own developer experience.</p>
          </div>
          <div class="panel-card">
            <h3>Session orchestration</h3>
            <p>Wrap orchestration logic around the core client for more advanced internal tools.</p>
          </div>
        </div>
      </section>
    </div>
  `;
}

Promise.all([
  fetch('/api/health').then((res) => res.json()),
  client.health().catch(() => ({ ok: false }))
]).then(([siteData, sdkData]) => {
  const status = document.createElement('div');
  status.className = 'status-pill';
  status.textContent = siteData.ok && sdkData.ok ? 'API online' : 'API warming up';
  document.querySelector('.topbar')?.appendChild(status);
}).catch(() => {});
