import PageHeader from "@/features/global/page-header";
import { readBrandSources } from "@/features/global/read-brand-source";
import { TemplateLayout } from "@/features/global/template-layout";
import { render } from "@/features/lib/email-to-html";
import { t } from "@/features/lib/utils";
import { Metadata } from "next";
import path from "path";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Notion | ReactUI Email",
  description:
    "Preview and code for the Notion Welcome Email template, built with Next.js and TailwindCSS for ReactUI Email.",
  keywords: [
    "ReactUI Email",
    "Notion Email Template",
    "TailwindCSS Email",
    "Next.js Email Templates",
    "Responsive Email Design",
    "Email Template Code",
    "React Email Components",
    "Notion Welcome Email",
    "Notion React Components",
  ],
  openGraph: {
    title: "Notion | ReactUI Email",
    description:
      "Explore the Notion Welcome Notion template, featuring a clean, responsive design and code preview, built with ReactUI Email.",
    url: "https://reactui.email",
    images: [
      {
        url: "https://reactui.email/opengraph-image.jpg",
        alt: "Notion Welcome Email Template Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notion | ReactUI Email",
    description:
      "Check out the Notion Welcome Email template with preview and code, built with Next.js and TailwindCSS for ReactUI Email.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/notion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = async () => {
  const brand = "notion";

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
            A growing collection of{" "}
            <span className="bg-gradient-to-br from-zinc-500 to-zinc-800 bg-clip-text font-semibold text-transparent dark:from-indigo-100 dark:to-zinc-500">
              {t(brand)}
            </span>{" "}
            email templates built with Next.js and TailwindCSS, designed for versatile brand
            integration.
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
