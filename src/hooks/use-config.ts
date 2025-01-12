import { create } from "zustand";
import { persist } from "zustand/middleware";

type Config = {
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
};

interface ConfigStore {
  config: Config;
  setConfig: (config: Config) => void;
}

const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      config: {
        packageManager: "pnpm",
      },
      setConfig: (config) => set({ config }),
    }),
    {
      name: "config",
    },
  ),
);

export function useConfig() {
  const { config, setConfig } = useConfigStore();
  return { config, setConfig };
}
