import './styles.css';
import { KrimsCodeClient } from './sdk.js';
import logoUrl from '../logo.png';

const app = document.getElementById('app');
const client = new KrimsCodeClient();

if (app) {
  app.innerHTML = `
    <div class="wrap">
      <header class="topbar">
        <a class="brand" href="#">
          <img src="${logoUrl}" alt="Krims Code logo" />
          <span>Krims Code</span>
        </a>
        <nav class="nav">
          <a href="#platform">Platform</a>
          <a href="#workflow">Workflow</a>
          <a href="#sdk">SDK</a>
          <a href="https://github.com/Krylo-60/krims-code-ide" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">AI-native builder OS</p>
          <h1>Design, debug, and ship with one calm intelligence layer.</h1>
          <p>Krims Code brings your IDE, CLI, and SDK into a single premium surface for founders, solo builders, and fast-moving teams.</p>
          <div class="actions">
            <a class="btn primary" href="https://github.com/Krylo-60/krims-code-ide" target="_blank" rel="noreferrer">See the repo</a>
            <a class="btn secondary" href="#platform">Explore the platform</a>
          </div>
          <ul class="stats">
            <li><strong>4x</strong><span>faster loops</span></li>
            <li><strong>1</strong><span>unified workspace</span></li>
            <li><strong>∞</strong><span>context-rich prompts</span></li>
          </ul>
        </div>

        <div class="hero-visual">
          <div class="hero-card">
            <div class="hero-card-top">
              <span class="status-badge active">Live</span>
              <span class="status-badge">Agent mode</span>
            </div>
            <div class="hero-card-body">
              <div class="code-panel">
                <div class="console-line">&gt; session.init()</div>
                <div class="console-line">&gt; workflow.run("ship a polish pass")</div>
                <div class="console-line">&gt; diagnose --project .</div>
              </div>
              <div class="mini-grid">
                <div class="mini-card"><span>Context</span><strong>Live</strong></div>
                <div class="mini-card"><span>Actions</span><strong>Auto</strong></div>
                <div class="mini-card"><span>Output</span><strong>Ready</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trust-row">
        <span>Trusted by builders who want fewer tabs and better output.</span>
        <div class="trust-pills">
          <span>Fast prototypes</span>
          <span>Precise debugging</span>
          <span>SDK-ready workflows</span>
        </div>
      </section>

      <section class="section" id="platform">
        <div class="section-heading">
          <p class="eyebrow">Platform</p>
          <h2>A focused workspace for serious product creation.</h2>
          <p>Every layer is tuned for clarity, from terminal commands to rich AI suggestions to reusable SDK primitives.</p>
        </div>
        <div class="grid">
          <article class="card">
            <h3>Terminal-first workflow</h3>
            <p>Move from idea to execution without leaving your command line.</p>
          </article>
          <article class="card">
            <h3>Desk-side IDE shell</h3>
            <p>Stay immersed with a refined interface designed for momentum.</p>
          </article>
          <article class="card">
            <h3>Intent-aware SDK</h3>
            <p>Build your own experience with primitives that feel native, not bolted on.</p>
          </article>
          <article class="card">
            <h3>Diagnostics that matter</h3>
            <p>Surface the right signal at the right moment, fast.</p>
          </article>
          <article class="card">
            <h3>Multi-model flexibility</h3>
            <p>Switch contexts without breaking your flow.</p>
          </article>
          <article class="card">
            <h3>Local-first speed</h3>
            <p>Stay responsive while keeping the experience lightweight.</p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="workflow">
        <div class="copy-panel">
          <p class="eyebrow">Workflow</p>
          <h2>Go from prompt to production with one continuous loop.</h2>
          <p>Krims Code is created for focused builders who want less friction and better output from every interaction.</p>
          <div class="feature-list">
            <div class="feature-item"><strong>01</strong><span>Start with a natural prompt.</span></div>
            <div class="feature-item"><strong>02</strong><span>Inspect, edit, and iterate inside context.</span></div>
            <div class="feature-item"><strong>03</strong><span>Ship a polished result without context switching.</span></div>
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-top">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="showcase-body">
            <div class="kpi-card">
              <span>Signal</span>
              <strong>Clear and resonant</strong>
            </div>
            <div class="kpi-card">
              <span>Velocity</span>
              <strong>Built for momentum</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="sdk">
        <div class="section-heading">
          <p class="eyebrow">Developer SDK</p>
          <h2>Embed the experience where your product already lives.</h2>
          <p>Use the same primitives to power internal tools, demos, and polished AI-assisted products.</p>
        </div>
        <div class="sdk-panel">
          <div class="panel-card">
            <h3>Health check</h3>
            <p>Verify the environment and initialize a session with a single call.</p>
          </div>
          <div class="panel-card">
            <h3>Prompt execution</h3>
            <p>Send prompts programmatically and make them part of your product experience.</p>
          </div>
          <div class="panel-card">
            <h3>Session orchestration</h3>
            <p>Wrap orchestration logic around the core client for more advanced tools.</p>
          </div>
        </div>
      </section>

      <section class="section cta-section">
        <div class="cta-card">
          <p class="eyebrow">Ready to build</p>
          <h2>Bring your next product into focus.</h2>
          <p>Open the repo, run the SDK, and start shaping your own AI-native workflow.</p>
          <a class="btn primary" href="https://github.com/Krylo-60/krims-code-ide" target="_blank" rel="noreferrer">View GitHub</a>
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
  status.textContent = siteData.ok && sdkData.ok ? 'System online' : 'Warming up';
  document.querySelector('.topbar')?.appendChild(status);
}).catch(() => {});
