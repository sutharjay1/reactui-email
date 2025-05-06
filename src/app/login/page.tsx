"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { useState } from "react";
import { signIn } from "../../lib/auth-client";

export default function SignIn() {
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);

  if (session) {
    redirect("/ai");
  }

  return (
    <main className="relative flex h-[calc(100vh-72px)] w-screen items-center justify-center">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-64 w-96 rounded-full bg-gradient-to-r from-purple-400/10 via-amber-300/10 to-orange-400/10 blur-3xl" />
      </div>

      <Card className="z-20 max-w-md border-none bg-transparent">
        <CardHeader className="flex flex-col items-center gap-3 space-y-0 overflow-visible">
          <CardTitle className="bg-gradient-to-r from-purple-300 via-amber-100 to-orange-300 bg-clip-text pb-2 text-center text-lg font-bold text-transparent md:text-4xl">
            Login to AI Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className={cn("flex w-full items-center gap-2", "flex-col justify-between")}>
              <Button
                className="flex items-center justify-center gap-2 rounded-full px-2 font-semibold md:px-4"
                disabled={loading}
                onClick={async () => {
                  await signIn.social(
                    {
                      provider: "github",
                      callbackURL: "/ai",
                    },
                    {
                      onRequest: () => {
                        setLoading(true);
                      },
                      onResponse: () => {
                        setLoading(false);
                      },
                      onSuccess: (ctx) => {
                        const authToken = ctx.response.headers.get("set-auth-token");
                        if (authToken) {
                          localStorage.setItem("bearer_token", authToken);
                        }
                      },
                    },
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
                Sign in with Github
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
