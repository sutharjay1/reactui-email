"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { Logout, Moon, Sun, User } from "@mynaui/icons-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function AccountDropdown({
  align = "end",
  side = "bottom",
  sideOffset = 5,
  alignOffset = 0,
  className = "",
}: {
  align?: "center" | "end" | "start";
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
  sideOffset?: number;
  alignOffset?: number;
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { session, loading, signOut } = useAuth();

  console.log(session);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={cn("w-full focus:outline-none sm:w-full md:w-full lg:w-full", className)}
      >
        <Button className="flex h-8 items-center justify-center rounded-full px-1">
          {loading ? (
            <Skeleton className="h-6 w-6 rounded-full" />
          ) : (
            <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full font-semibold">
              <img
                src={session?.user?.image || `https://avatar.vercel.sh/${session?.user?.name}`}
                alt={session?.user?.name.charAt(0) ?? ""}
                className="rounded-full object-cover"
              />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className="w-full p-0"
      >
        <div className="p-2 pb-0.5">
          <DropdownMenuLabel className="mb-1">My Account</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={() => router.push("/settings/profile")}
            className="justify-start gap-3"
          >
            <User className="h-4 w-4" strokeWidth={2} />
            Profile
          </DropdownMenuItem>
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {theme === "light" ? (
                  <Sun className="h-4 w-4" strokeWidth={2} />
                ) : (
                  <Moon className="h-4 w-4" strokeWidth={2} />
                )}
                Appearance
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent sideOffset={10}>
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </div>

        <DropdownMenuSeparator />
        <div className="p-2 pt-0.5">
          <DropdownMenuItem onClick={() => signOut()}>
            <span className="flex w-full items-center justify-start gap-3 text-red-500 hover:text-red-600">
              <Logout className="h-4 w-4" strokeWidth={2} />
              Log out
            </span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
