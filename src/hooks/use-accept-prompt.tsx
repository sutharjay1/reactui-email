import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AcceptPromptProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

export const useAcceptPrompt = create<AcceptPromptProps>()(
  persist(
    (set) => ({
      prompt: "",
      setPrompt: (prompt) => set({ prompt }),
    }),
    {
      name: "accept-prompt",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
