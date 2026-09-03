import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only: serve the Vercel serverless functions in `api/` from the Vite dev
// server so `npm run dev` can exercise the proposal form without `vercel dev`.
function apiDevServer(mode) {
  const env = loadEnv(mode, process.cwd(), '')
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) process.env[key] = value
  }

  return {
    name: 'api-dev-server',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const raw = Buffer.concat(chunks).toString('utf8')
          req.body = raw ? JSON.parse(raw) : {}

          res.status = (code) => {
            res.statusCode = code
            return res
          }
          res.json = (obj) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(obj))
            return res
          }

          const { default: handler } = await server.ssrLoadModule('/api/contact.js')
          await handler(req, res)
        } catch (err) {
          console.error('[api-dev-server] /api/contact failed:', err)
          if (!res.writableEnded) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Dev API error — see terminal.' }))
          }
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), apiDevServer(mode)],
}))
