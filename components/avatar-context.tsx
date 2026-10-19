"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

export type AvatarState = "idle" | "thinking" | "talking";

type Ctx = {
  avatar: AvatarState;
  setAvatar: (s: AvatarState) => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
};

const AvatarCtx = createContext<Ctx | null>(null);

export function AvatarProvider({ children }: { children: ReactNode }) {
  const [avatar, setAvatar] = useState<AvatarState>("idle");
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <AvatarCtx.Provider value={{ avatar, setAvatar, chatOpen, setChatOpen }}>
      {children}
    </AvatarCtx.Provider>
  );
}

export function useAvatar() {
  const ctx = useContext(AvatarCtx);
  if (!ctx) throw new Error("useAvatar must be used inside AvatarProvider");
  return ctx;
}