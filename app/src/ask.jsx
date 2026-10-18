"use client";

import { useState, useRef, useEffect } from "react";
import AvatarOrb3D from "../../components/AvatarOrb3D";

export default function Ask() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Iqra's portfolio assistant. Ask me about her projects, skills or experience." },
  ]);
  const [input, setInput] = useState("");
  const [avatar, setAvatar] = useState("idle");
  const endRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || avatar === "thinking") return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setAvatar("thinking");

    let reply;
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await r.json();
      reply = r.ok
        ? data.reply
        : r.status === 429
        ? "I'm getting a lot of questions right now. Please try again in a minute."
        : "Something went wrong on my side. Please try again.";
    } catch {
      reply = "I couldn't reach the server. Please try again.";
    }

    setMessages([...next, { role: "assistant", content: reply }]);
    setAvatar("talking");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAvatar("idle"), Math.min(6000, 1200 + reply.length * 25));
  }

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", color: "#e5e7eb", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AvatarOrb3D state={avatar} size={280} />
      </div>

      <div style={{ height: 260, overflowY: "auto", padding: 12, borderRadius: 12,
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "8px 0", textAlign: m.role === "user" ? "right" : "left" }}>
            <span style={{ display: "inline-block", padding: "8px 12px", borderRadius: 12, maxWidth: "85%",
              background: m.role === "user" ? "#7c3aed" : "rgba(34,211,238,0.15)" }}>
              {m.content}
            </span>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={send} style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Iqra's work..."
          maxLength={500}
          style={{ flex: 1, padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent", color: "inherit" }} />
        <button type="submit" disabled={avatar === "thinking"}
          style={{ padding: "10px 16px", borderRadius: 10, border: 0, background: "#22d3ee", color: "#05060f", fontWeight: 600 }}>
          Send
        </button>
      </form>
    </div>
  );
}