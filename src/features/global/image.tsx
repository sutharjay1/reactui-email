"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  logo: {
    light: string;
    dark: string;
  };
  alt: string;
};

export const ThemeImage = ({ logo, alt }: Props) => {
  const { theme } = useTheme();

  const currentTheme = theme || "light";

  return (
    <Image
      src={currentTheme === "dark" ? logo.dark : logo.light}
      alt={alt}
      width={32}
      height={32}
      className="h-8 w-8"
      priority
    />
  );
};
