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
  title: "SoftGen | ReactUI Email",
  description:
    "Preview and code for the SoftGen Email templates, built with Next.js and TailwindCSS for ReactUI Email.",
  keywords: [
    "ReactUI Email",
    "SoftGen Email Template",
    "TailwindCSS Email",
    "Next.js Email Templates",
    "Responsive Email Design",
    "Email Template Code",
    "React Email Components",
    "SoftGen Welcome Email",
    "SoftGen React Components",
  ],
  openGraph: {
    title: "SoftGen | ReactUI Email",
    description:
      "Explore the SoftGen Email templates, featuring a clean, responsive design and code preview, built with ReactUI Email.",
    url: "https://reactui.email",
    images: [
      {
        url: "https://reactui.email/opengraph-image.jpg",
        alt: "SoftGen Email Template Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftGen | ReactUI Email",
    description:
      "Check out the SoftGen Email templates with preview and code, built with Next.js and TailwindCSS for ReactUI Email.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/softgen",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = async () => {
  const brand = "softgen";

  const emailSource = await readBrandSources(brand);

  const emailPreviews = await Promise.all(
    emailSource.map(async (source) => {
      const emailModule = await import(
        `@/email/${brand}/${path.basename(source.filePath, ".tsx")}`
      );
      const EmailComponent = emailModule.default;

      const emailHtml = await render(<EmailComponent />);

      const fileName = path
        .basename(source.filePath, ".tsx")
        .replace(/^\d+-/, "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

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
            <Link href="https://softgen.ai?ref=reactui-email" target="_blank">
              <span className="bg-gradient-to-br from-zinc-500 to-zinc-800 bg-clip-text font-semibold text-transparent dark:from-indigo-100 dark:to-zinc-500">
                SoftGen
              </span>{" "}
            </Link>
            is an AI-powered platform that builds full-stack web apps from your instructions. No
            coding needed.
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
