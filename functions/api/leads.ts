// Cloudflare Pages Function — handles POST /api/leads.
// Deployed by Cloudflare's own build (not bundled by our Vite/tsc build),
// so it intentionally doesn't depend on @cloudflare/workers-types.

interface Env {
  DB: D1Database
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_INTENTS = new Set(['launch-interest', 'newsletter'])
const MAX_EMAIL_LEN = 254
const MAX_SOURCE_LEN = 64
const RATE_LIMIT_WINDOW_MINUTES = 10
const RATE_LIMIT_MAX_PER_IP = 8

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const contentType = request.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return json({ error: 'Unsupported content type' }, 415)
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  if (typeof body !== 'object' || body === null) {
    return json({ error: 'Invalid payload' }, 400)
  }

  const { email, intent, source } = body as Record<string, unknown>

  if (
    typeof email !== 'string' ||
    email.length > MAX_EMAIL_LEN ||
    !EMAIL_RE.test(email)
  ) {
    return json({ error: 'A valid email is required' }, 400)
  }

  if (typeof intent !== 'string' || !VALID_INTENTS.has(intent)) {
    return json({ error: 'Invalid intent' }, 400)
  }

  const cleanSource = typeof source === 'string' && source.trim() ? source.trim().slice(0, MAX_SOURCE_LEN) : 'unknown'
  const cleanEmail = email.trim().toLowerCase()
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
  const now = new Date().toISOString()

  const rateCheck = await env.DB.prepare(
    `SELECT COUNT(*) as count FROM leads WHERE ip = ?1 AND created_at > datetime('now', ?2)`,
  )
    .bind(ip, `-${RATE_LIMIT_WINDOW_MINUTES} minutes`)
    .first<{ count: number }>()

  if ((rateCheck?.count ?? 0) >= RATE_LIMIT_MAX_PER_IP) {
    return json({ error: 'Too many requests, please try again later' }, 429)
  }

  // submittedAt from the client is informational only — the server clock
  // is the source of truth for created_at/rate limiting.
  await env.DB.prepare(
    `INSERT INTO leads (email, intent, source, submitted_at, ip, created_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?4)
     ON CONFLICT (email, intent) DO UPDATE SET submitted_at = excluded.submitted_at`,
  )
    .bind(cleanEmail, intent, cleanSource, now, ip)
    .run()

  return json({ ok: true })
}

// Reached for any method other than POST (onRequestPost above handles POST).
export const onRequest: PagesFunction<Env> = async () => json({ error: 'Method not allowed' }, 405)
