import Footer from "@/features/global/footer";
import { components } from "@/features/lib/component";
import { lead } from "@/features/lib/template-list";
import { ArrowLongRightSolid, PlaySolid } from "@mynaui/icons-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="flex min-h-full flex-1 flex-col">
        <div className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4">
              <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent">
                <span className="flex shrink-0 border-r border-border pr-2">
                  <PlaySolid size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                New releases every week
              </p>
            </div>

            <div className="mb-16">
              <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
                Beautiful Email Templates Built with React and Tailwind CSS
              </h1>
              <p className="text-lg text-muted-foreground">
                Effortlessly design professional emails with our collection of customizable React
                components. Fast, responsive, and developer-friendly
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-5 text-muted-foreground">Templates</h2>
              <nav>
                <ul className="grid gap-2 md:grid-cols-2">
                  {lead
                    .filter((lead) => lead.live)
                    .map((lead) => (
                      <li key={lead.name} className="relative flex h-full">
                        <Link
                          href={lead.name.replaceAll(" ", "-").trim().toLowerCase()}
                          className="inline-flex h-full w-full flex-col items-start justify-between space-y-2 rounded-lg border border-border bg-background p-4 font-medium shadow-sm shadow-black/5 outline-offset-2 ring-inset ring-primary/10 transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">{lead.logo}</div>
                            {lead.update && (
                              <span className="relative ml-2 rounded-sm bg-[#adfa1d] px-1.5 py-1 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                New
                                <span className="absolute inset-0 rounded-sm ring-1 ring-inset ring-primary/10"></span>
                              </span>
                            )}
                          </div>
                          <div className="flex w-full flex-1 items-end justify-between">
                            <h3 className="truncate">{lead.name}</h3>
                            <ArrowLongRightSolid
                              size={20}
                              strokeWidth={2}
                              className="shrink-0 opacity-60"
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>

            <div className="mb-12">
              <h2 className="mb-5 text-muted-foreground">Component</h2>
              <nav>
                <ul className="grid gap-2">
                  {components
                    .sort((a, b) => a.label.localeCompare(b.label))
                    .filter((lead) => lead.live)
                    .map((lead) => (
                      <li key={lead.label} className="relative flex h-full">
                        <Link
                          href={`/docs/component/${lead.label.replaceAll(" ", "-").trim().toLowerCase()}`}
                          className="flex h-full w-full items-center justify-between rounded-lg border border-border bg-background p-4 font-semibold shadow-sm shadow-black/5 outline-offset-2 ring-inset ring-primary/10 transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50"
                        >
                          <h3 className="truncate">{lead.label}</h3>
                          <ArrowLongRightSolid
                            size={20}
                            strokeWidth={2}
                            className="space-y-0 opacity-60"
                          />
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
