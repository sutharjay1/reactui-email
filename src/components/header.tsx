"use client";

import GithubButton from "@/components/github-button";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/features/lib/utils";
import { Button } from "@/features/ui/button";
import { Menu, X } from "@mynaui/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="z-50">
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b border-border/70">
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center gap-2 whitespace-nowrap rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
          >
            <span className="sr-only">ReactUI Email</span>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="stroke-zinc-800 dark:stroke-zinc-200"
            >
              <path d="M16 11.996V7.998m0 3.998c0-5.157-8-5.157-8 0 0 5.167 8 5.11 8 0m0 0c0 5 5 5 5 0C21 7.027 16.97 3 12 3s-9 4.027-9 8.996c0 4.968 4.03 8.995 9 8.995 1.675.084 3.938-.421 5.776-1.831" />
            </svg>
            <span className="text-lg font-semibold text-muted-foreground text-zinc-800 dark:text-zinc-200">
              ReactUI Email
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <GithubButton />
            <ThemeToggle />

            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-lg text-primary hover:bg-background/10",
                  "text-primary hover:text-primary",
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 left-0 top-0 z-50 h-full bg-background px-4 sm:px-6 md:hidden">
            <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b border-border/70">
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center gap-2 whitespace-nowrap rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
              >
                <span className="sr-only">ReactUI Email</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="stroke-zinc-800 dark:stroke-zinc-200"
                >
                  <path d="M16 11.996V7.998m0 3.998c0-5.157-8-5.157-8 0 0 5.167 8 5.11 8 0m0 0c0 5 5 5 5 0C21 7.027 16.97 3 12 3s-9 4.027-9 8.996c0 4.968 4.03 8.995 9 8.995 1.675.084 3.938-.421 5.776-1.831" />
                </svg>
                <span className="text-lg font-semibold text-muted-foreground text-zinc-800 dark:text-zinc-200">
                  ReactUI Email
                </span>
              </Link>
              <div className="flex items-center gap-2">
                <GithubButton />
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col py-4">
              <div className="flex h-full flex-col gap-2">
                {[{ label: "Components", href: "/components", live: false }].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-2 text-base text-primary/60 hover:bg-accent hover:text-primary",
                      pathname === link.href && "bg-accent px-4 py-2 text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
