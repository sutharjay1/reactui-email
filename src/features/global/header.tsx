"use client";

import Link, { LinkProps } from "next/link";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { lead, navLinks } from "@/features/lib/constant";
import { cn } from "@/features/lib/utils";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import GithubButton from "./github-button";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <header className="z-50">
      <div className="px-4 sm:px-6">
        <div
          className={cn(
            "mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b border-border/70",
          )}
        >
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
            <Drawer open={open} onOpenChange={onOpenChange}>
              <DrawerTitle className="sr-only">Navigation</DrawerTitle>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  className="-ml-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="!size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[60svh] p-0">
                <div className="overflow-auto p-6">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map(
                      (item) =>
                        item.href && (
                          <MobileLink
                            key={item.href}
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-base font-medium text-primary"
                          >
                            {item.label}
                          </MobileLink>
                        ),
                    )}
                  </div>
                  <div className="my-6" />
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-base font-medium text-primary">Templates</h3>
                    {lead
                      .filter((lead) => lead.live)
                      .map((lead) => (
                        <MobileLink
                          key={lead.name.replaceAll(" ", "-").trim().toLowerCase()}
                          href={lead.name.replaceAll(" ", "-").trim().toLowerCase()}
                          onOpenChange={setOpen}
                          className="text-base font-medium text-muted-foreground"
                        >
                          {lead.name}
                        </MobileLink>
                      ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
