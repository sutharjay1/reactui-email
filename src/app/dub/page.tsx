import PageHeader from "@/features/global/page-header";
import { readBrandSources } from "@/features/global/read-brand-source";
import { TemplateLayout } from "@/features/global/template-layout";
import { render } from "@/features/lib/email-to-html";
import { t } from "@/features/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import path from "path";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Dub | ReactUI Email",
  description:
    "Preview and code for the Dub Welcome Email template, built with Next.js and TailwindCSS for ReactUI Email.",
  keywords: [
    "ReactUI Email",
    "Dub Email Template",
    "TailwindCSS Email",
    "Next.js Email Templates",
    "Responsive Email Design",
    "Email Template Code",
    "React Email Components",
    "Dub Welcome Email",
    "Dub React Components",
  ],
  openGraph: {
    title: "Dub | ReactUI Email",
    description:
      "Explore the Dub Welcome Email template, featuring a clean, responsive design and code preview, built with ReactUI Email.",
    url: "https://reactui.email",
    images: [
      {
        url: "https://reactui.email/opengraph-image.jpg",
        alt: "Dub Welcome Email Template Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dub | ReactUI Email",
    description:
      "Check out the Dub Welcome Email template with preview and code, built with Next.js and TailwindCSS for ReactUI Email.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/dub",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = async () => {
  const brand = "dub";

  const emailSource = await readBrandSources(brand);

  const emailPreviews = await Promise.all(
    emailSource.map(async (source) => {
      const emailModule = await import(
        `@/email/${brand}/${path.basename(source.filePath, ".tsx")}`
      );
      const EmailComponent = emailModule.default;

      const emailHtml = await render(<EmailComponent />);

      const fileNameParts = path
        .basename(source.filePath, ".tsx")
        .split("--")
        .reverse()
        .map((part, index) => {
          if (index === 1) {
            return part.replace("+", " of ");
          }

          if (index === 0) {
            return part
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          }

          return part;
        });

      const shouldAddParentheses = /\d+\+\d+--/.test(path.basename(source.filePath));

      const fileName = fileNameParts.join(" - (") + (shouldAddParentheses ? ")" : "");

      return {
        fileName,
        content: source.content,
        emailHtml,
      };
    }),
  );

  return (
    <main className="relative">
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <PageHeader title={brand}>
            <Link href="https://dub.co?ref=reactui-email" target="_blank">
              <span className="bg-gradient-to-br from-zinc-500 to-zinc-800 bg-clip-text font-semibold text-transparent dark:from-indigo-100 dark:to-zinc-500">
                Dub.co
              </span>{" "}
            </Link>
            is an open-source link management tool for modern marketing teams to create, share, and
            track short links.
          </PageHeader>

          {emailPreviews.map((preview) => (
            <TemplateLayout
              brand={t(brand)}
              id={preview.fileName}
              key={preview.fileName}
              label={preview.fileName}
              emailHtml={preview.emailHtml}
              emailSource={preview.content as string}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
