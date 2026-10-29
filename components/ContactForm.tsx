"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Your name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email address
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-medium">
        What is this about?
        <select name="topic" className={field} defaultValue="A full time role">
          <option className="bg-slate-900">A full time role</option>
          <option className="bg-slate-900">Freelance work</option>
          <option className="bg-slate-900">Something else</option>
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-medium">
        Your message
        <textarea name="message" required maxLength={3000} rows={5} className={`${field} resize-y`} />
      </label>

      {/* Honeypot: real visitors never see or fill this */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
        >
          <Send size={16} /> {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-emerald-400">Message sent. I&apos;ll reply by email.</span>}
          {status === "error" && <span className="text-rose-400">{error}</span>}
        </p>
      </div>
    </form>
  );
}
