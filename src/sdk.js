export class KrimsCodeClient {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  async health() {
    const response = await fetch(`${this.baseUrl}/api/sdk/health`);
    if (!response.ok) throw new Error('SDK health check failed');
    return response.json();
  }

  async createSession(options = {}) {
    return {
      ok: true,
      id: `session-${Date.now()}`,
      mode: options.mode || 'agentic',
      focus: options.focus || 'ship faster'
    };
  }

  async executePrompt(prompt, options = {}) {
    return {
      ok: true,
      prompt,
      response: `Krims Code ready to assist with: ${prompt}`,
      mode: options.mode || 'agentic'
    };
  }
}
