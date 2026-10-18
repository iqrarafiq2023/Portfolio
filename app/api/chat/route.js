import { SYSTEM } from "../../../lib/knowledge.js";

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 6;
}

export async function POST(req) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "unknown";
  if (limited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });

  let body;
  try { body = await req.json(); } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  if (!Array.isArray(body.messages)) {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const clean = body.messages.slice(-8).map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content).slice(0, 500),
  }));

  try {
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        temperature: 0.4,
        max_tokens: 400,
        messages: [{ role: "system", content: SYSTEM }, ...clean],
      }),
    });

    if (r.status === 429) return Response.json({ error: "quota" }, { status: 429 });
    if (!r.ok) return Response.json({ error: "upstream" }, { status: 502 });

    const data = await r.json();
    return Response.json({ reply: data.choices?.[0]?.message?.content ?? "" });
  } catch {
    return Response.json({ error: "server" }, { status: 500 });
  }
}