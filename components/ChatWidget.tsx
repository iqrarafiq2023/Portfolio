"use client";
import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { useAvatar } from "./avatar-context";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What has Iqra built with AI?",
  "Tell me about her healthcare experience",
  "What is her tech stack?",
];

export default function ChatWidget() {
  const { setAvatar, chatOpen, setChatOpen } = useAvatar();
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Iqra's portfolio assistant. Ask me about her projects, skills or experience." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy, chatOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setChatOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setChatOpen]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;

    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setAvatar("thinking");

    let reply: string;
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
        ? "I'm getting a lot of questions right now. Please try again in a minute, or browse the projects on this page."
        : "Something went wrong on my side. Please try again.";
    } catch {
      reply = "I couldn't reach the server. Please try again.";
    }

    setMessages([...next, { role: "assistant", content: reply || "I don't have an answer for that." }]);
    setBusy(false);
    setAvatar("talking");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAvatar("idle"), Math.min(6000, 1200 + reply.length * 25));
  }

  return (
    <>
      {/* launcher */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/25 transition hover:scale-105"
        >
          <Sparkles size={16} /> Ask Iqra
        </button>
      )}

      {/* panel */}
      {chatOpen && (
        <section
          role="dialog"
          aria-label="Chat with Iqra's assistant"
          className="fixed inset-x-3 bottom-3 z-50 flex h-[min(560px,80vh)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0c1c]/90 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[390px]"
        >
          <header className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div>
              <p className="text-sm font-semibold">Ask Iqra</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> AI assistant
              </p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <p
                  className={
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 " +
                    (m.role === "user"
                      ? "bg-gradient-to-r from-cyan-400 to-violet-400 text-slate-950"
                      : "border border-white/[0.08] bg-white/[0.05] text-slate-200")
                  }
                >
                  {m.content}
                </p>
              </div>
            ))}

            {busy && (
              <div className="flex gap-1.5 px-2 py-2">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-2 w-2 animate-bounce rounded-full bg-cyan-300"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            )}

            {messages.length === 1 && !busy && (
              <div className="flex flex-col gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] px-3.5 py-2 text-left text-xs text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-white/[0.07] p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder="Ask about Iqra's work..."
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 transition disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}