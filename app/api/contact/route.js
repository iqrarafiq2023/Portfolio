
import { NextResponse } from "next/server";

// Best-effort rate limit (resets when the serverless instance restarts).
const hits = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const oneLine = (v) => v.replace(/[\r\n]+/g, " ");

export async function POST(req) {
  let body;

  try {
    body = await req.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: silently reject bot submissions.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const ip = (
    req.headers.get("x-forwarded-for") || "unknown"
  ).split(",")[0].trim();

  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(
    (t) => now - t < WINDOW_MS
  );

  if (recent.length >= MAX_PER_WINDOW) {
    return NextResponse.json(
      {
        error:
          "Too many messages. Please try again later or email me directly.",
      },
      { status: 429 }
    );
  }

  const name = oneLine(clean(body.name, 100));
  const email = oneLine(clean(body.email, 200));
  const topic =
    oneLine(clean(body.topic, 60)) || "Something else";
  const message = clean(body.message, 3000);

  // Validate required fields and email format.
  if (
    !name ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      {
        error:
          "Please add your name, a valid email and a message.",
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  hits.set(ip, [...recent, now]);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Portfolio message: ${topic} (${name})`,
        text: `Name: ${name}
Email: ${email}
Topic: ${topic}

${message}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            "Could not send your message. Please email me directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not send your message. Please email me directly.",
      },
      { status: 502 }
    );
  }
}
