import Link from "next/link";

import GithubButton from "@/components/github-button";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
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
          </div>
        </div>
      </div>
    </header>
  );
}
