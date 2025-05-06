import { ColorFormat } from "@/lib/color";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useMounted } from "./use-mounted";

type ColorsStore = {
  format: ColorFormat;
  setFormat: (format: ColorFormat) => void;
};

export const useColorsStore = create<ColorsStore>()(
  persist(
    (set) => ({
      format: "hsl",
      setFormat: (format: ColorFormat) => set({ format }),
    }),
    {
      name: "colors",
    },
  ),
);

export function useColors() {
  const { format, setFormat } = useColorsStore();
  const mounted = useMounted();

  return {
    isLoading: !mounted,
    format,
    setFormat,
  };
}
