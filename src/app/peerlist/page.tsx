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
  title: "Peerlist Email Templates | ReactUI Email",
  description:
    "Collection of Peerlist-style email templates built with React, Next.js and TailwindCSS. View previews and get the code for responsive, customizable email designs.",
  keywords: [
    "ReactUI Email",
    "Peerlist Email Templates",
    "TailwindCSS Email",
    "Next.js Email Templates",
    "Responsive Email Design",
    "Email Template Code",
    "React Email Components",
    "Peerlist Email Design",
    "Email Development",
    "Email Marketing Templates",
  ],
  openGraph: {
    title: "Peerlist Email Templates | ReactUI Email",
    description:
      "Collection of Peerlist-style email templates built with React, Next.js and TailwindCSS. View previews and get the code for responsive, customizable email designs.",
    url: "https://reactui.email/peerlist",
    images: [
      {
        url: "https://reactui.email/opengraph-image.jpg",
        alt: "Peerlist Email Templates Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerlist Email Templates | ReactUI Email",
    description:
      "Collection of Peerlist-style email templates built with React, Next.js and TailwindCSS. View previews and get the code for responsive, customizable email designs.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/peerlist",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = async () => {
  const brand = "peerlist";

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
            <Link href="https://peerlist.io?ref=reactui-email" target="_blank">
              <span className="bg-gradient-to-br from-zinc-500 to-zinc-800 bg-clip-text font-semibold text-transparent dark:from-indigo-100 dark:to-zinc-500">
                Peerlist
              </span>{" "}
            </Link>
            is a professional network for tech people to showcase their work, connect with peers,
            and find their next opportunity.
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
