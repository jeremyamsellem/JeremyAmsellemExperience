# Resume Website

An AI-powered personal portfolio and resume site. Visitors can chat with an AI that knows your full background, run a job fit analysis, and explore AI-generated STAR narratives for each role.

## Stack

- React 18 + TypeScript + Vite
- shadcn/ui + Tailwind CSS
- **AI backend:** n8n (webhook orchestration) → OpenRouter (LLM)

## Quick start

Requires Node.js 18+ (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
npm install
cp .env.example .env   # fill in your values
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and set:

| Variable | Description |
|---|---|
| `VITE_N8N_WEBHOOK_URL` | Your n8n webhook URL for fit-check and AI context actions |
| `VITE_N8N_CHAT_WEBHOOK_URL` | Your n8n webhook URL for streaming chat (must return SSE) |
| `VITE_N8N_WEBHOOK_SECRET` | Optional bearer token to protect your webhook |

## n8n + OpenRouter setup

The AI features route through two n8n workflows:

### Workflow 1 — Chat (streaming SSE)
- **Trigger:** Webhook (POST) at `VITE_N8N_CHAT_WEBHOOK_URL`
- **Switch node** on `action` field → `"chat"`
- **HTTP Request node** → `https://openrouter.ai/api/v1/chat/completions`
  - Set `stream: true` in body
  - Forward SSE response back to the webhook caller
- **Respond to Webhook node** — set to stream the response

### Workflow 2 — Fit-check & AI context (JSON)
- **Trigger:** Webhook (POST) at `VITE_N8N_WEBHOOK_URL`
- **Switch node** on `action` field → `"fit-check"` or `"ai-context"`
- **HTTP Request node** → `https://openrouter.ai/api/v1/chat/completions`
  - `stream: false`
- **Respond to Webhook node** — return `{ content: "..." }`

### Request body sent by the frontend

```json
{
  "action": "chat" | "fit-check" | "ai-context",
  "messages": [{ "role": "user", "content": "..." }],
  "jobDescription": "...",
  "resumeData": {
    "resume": "...",
    "skills": "...",
    "portfolio": "...",
    "projects": "..."
  }
}
```

### OpenRouter model recommendation

```
google/gemini-flash-1.5   (fast + cheap, good for all three actions)
anthropic/claude-3.5-sonnet  (higher quality for fit-check)
```

## Content

All personal content lives in markdown files — edit freely:

- `public/data/resume.md`
- `public/data/skills.md`
- `public/data/portfolio.md`
- `public/data/projects.md`

## Deploy

Build for production:

```sh
npm run build   # output in dist/
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, etc.). Set the env vars in your host's dashboard.
