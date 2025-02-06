import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/features/global/header";
import Illustration from "@/features/global/illustration";
import { ThemeProvider } from "@/features/global/theme-provider";
import { cn } from "@/features/lib/utils";
import { PostHogProvider } from "@/features/providers/ph-provider";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://reactui.email"),
  title: "ReactUI Email - Email Templates for React",
  description:
    "A library of customizable React email components built with Tailwind CSS. Ready-to-use email templates, designed to be mobile-friendly and easily adaptable for your projects.",
  keywords: [
    "React",
    "email templates",
    "email components",
    "Tailwind CSS",
    "open-source",
    "React UI components",
    "React UI email components",
    "React UI email templates",
  ],
  authors: [{ name: "Jay Suthar", url: "https://peerlist.io/sutharjay" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-[100dvh] bg-background font-sans antialiased", fontSans.variable)}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              <Header />
              <Illustration />
              {children}
            </div>
            <Toaster />
            <Sonner />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
