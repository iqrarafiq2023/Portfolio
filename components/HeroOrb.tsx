"use client";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";
import { useAvatar } from "./avatar-context";

const AvatarOrb3D = dynamic(() => import("./AvatarOrb3D"), {
  ssr: false,
  loading: () => <div className="h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />,
});

export default function HeroOrb() {
  const { avatar, setChatOpen } = useAvatar();

  return (
    <div className="relative mx-auto h-[330px] w-[330px] sm:h-[440px] sm:w-[440px]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />

      {/* orbit ring + dots */}
      <div className="pointer-events-none absolute inset-0 -rotate-[24deg] rounded-[50%] border border-violet-400/25" />
      <span className="pointer-events-none absolute left-[14%] top-[22%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_14px_#a78bfa]" />
      <span className="pointer-events-none absolute bottom-[26%] right-[8%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />
      <span className="pointer-events-none absolute right-[22%] top-[10%] h-1.5 w-1.5 rounded-full bg-violet-300" />

      {/* the orb itself */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.75] sm:scale-100">
        <AvatarOrb3D state={avatar} size={440} />
      </div>

      {/* handwritten note */}
      <p
        className="pointer-events-none absolute -top-2 right-0 hidden -rotate-6 text-lg text-violet-300 sm:block"
        style={{ fontFamily: "'Segoe Script','Bradley Hand','Comic Sans MS',cursive" }}
      >
        Let&apos;s build something
        <br />
        amazing
      </p>

      {/* open chat */}
      <button
        onClick={() => setChatOpen(true)}
        className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cyan-300/25 bg-[#0a0c1c]/80 px-4 py-2 text-xs text-cyan-200 backdrop-blur-xl transition hover:border-cyan-300/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
      >
        <Sparkles size={14} /> Ask my AI assistant
      </button>
    </div>
  );
}