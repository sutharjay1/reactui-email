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
  title: "Framer Email Templates | ReactUI Email",
  description:
    "Collection of Framer-style email templates built with React, Next.js and TailwindCSS. View previews and get the code for responsive, customizable email designs.",
  keywords: [
    "ReactUI Email",
    "Framer Email Templates",
    "TailwindCSS Email",
    "Next.js Email Templates",
    "Responsive Email Design",
    "Email Template Code",
    "React Email Components",
    "Framer Email Design",
    "Email Development",
    "Email Marketing Templates",
  ],
  openGraph: {
    title: "Framer Email Templates | ReactUI Email",
    description:
      "Collection of Framer-style email templates built with React, Next.js and TailwindCSS. View previews and get the code for responsive, customizable email designs.",
    url: "https://reactui.email/framer",
    images: [
      {
        url: "https://reactui.email/opengraph-image.jpg",
        alt: "Framer Email Templates Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framer Email Templates | ReactUI Email",
    description:
      "Collection of Framer-style email templates built with React, Next.js and TailwindCSS. View previews and get the code for responsive, customizable email designs.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/framer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = async () => {
  const brand = "framer";

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
            <Link href="https://framer.com?ref=reactui-email" target="_blank">
              <span className="bg-gradient-to-br from-zinc-500 to-zinc-800 bg-clip-text font-semibold text-transparent dark:from-indigo-100 dark:to-zinc-500">
                Framer
              </span>{" "}
            </Link>
            is a powerful design and prototyping tool that helps teams create stunning websites and
            apps with interactive animations.
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
