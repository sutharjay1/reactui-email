import { AcceptPrompt } from "@/features/ai/accept-prompt";
import Footer from "@/features/global/footer";
import { PlaySolid } from "@mynaui/icons-react";

export default function Page() {
  return (
    <>
      <main className="relative flex min-h-[calc(100vh-72px)] flex-1 flex-col">
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4 text-center">
              <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent">
                <span className="flex shrink-0 border-r border-border pr-2">
                  <PlaySolid size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                AI Magic Inside
              </p>
            </div>

            <div className="mb-8 text-center">
              <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
                What email do you need?
              </h1>
              <p className="mx-auto max-w-prose text-balance text-base text-muted-foreground">
                Create beautiful emails in minutes for promotional, transactional, and more.
              </p>
            </div>

            <div className="mb-12">
              <AcceptPrompt />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
