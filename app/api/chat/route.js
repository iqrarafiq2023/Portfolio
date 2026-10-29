import { SYSTEM } from "../../../lib/knowledge.js";

// Best-effort limits (per server instance; they reset when it restarts).
const hits = new Map();
const PER_MINUTE = 6;
const PER_HOUR = 40;

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3_600_000);
  recent.push(now);
  hits.set(ip, recent);

  // keep the map from growing forever
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (now - times[times.length - 1] > 3_600_000) hits.delete(key);
    }
  }

  const lastMinute = recent.filter((t) => now - t < 60_000).length;
  return lastMinute > PER_MINUTE || recent.length > PER_HOUR;
}

export async function POST(req) {
  // Only accept requests coming from this site's own pages.
  const origin = req.headers.get("origin");
  if (origin) {
    let host = "";
    try { host = new URL(origin).host; } catch {}
    if (host !== req.headers.get("host")) {
      return Response.json({ error: "forbidden" }, { status: 403 });
    }
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });

  let body;
  try { body = await req.json(); } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  if (!Array.isArray(body.messages)) {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const clean = body.messages.slice(-8).map((m) => ({
    role: m?.role === "assistant" ? "assistant" : "user",
    content: String(m?.content ?? "").slice(0, 500),
  }));

  try {
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "openai/gpt-oss-120b",
        temperature: 0.4,
        max_tokens: 600,
        reasoning_effort: "low",
        messages: [{ role: "system", content: SYSTEM }, ...clean],
      }),
    });

    if (r.status === 429) return Response.json({ error: "quota" }, { status: 429 });
    if (!r.ok) {
      const text = await r.text();
      console.error("Groq error:", r.status, text);
      return Response.json({ error: "upstream" }, { status: 502 });
    }

    const data = await r.json();
    return Response.json({ reply: data.choices?.[0]?.message?.content ?? "" });
  } catch {
    return Response.json({ error: "server" }, { status: 500 });
  }
}