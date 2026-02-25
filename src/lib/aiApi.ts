// AI API configuration — routes through n8n → OpenRouter

// Used by fit-check and ai-context (non-streaming, returns JSON)
export const AI_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string;

// Used by chat (streaming SSE response)
export const CHAT_WEBHOOK_URL = import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL as string;

const secret = import.meta.env.VITE_N8N_WEBHOOK_SECRET as string | undefined;

export function getAIHeaders(): Record<string, string> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (secret) headers["Authorization"] = `Bearer ${secret}`;
  return headers;
}
