import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'krims-code-site', timestamp: new Date().toISOString() });
});

app.get('/api/sdk/health', (_req, res) => {
  res.json({ ok: true, sdk: 'krims-code-sdk', version: '1.0.0' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Krims Code site listening on port ${port}`);
});
