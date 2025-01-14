import PageHeader from "@/components/page-header";
import { readBrandSource } from "@/components/read-brand-source";
import { TemplateLayout } from "@/components/template-layout";
import AppleWelcomeTemplate from "@/email/apple/welcome";
import { render } from "@/features/lib/email-to-html";
import { t } from "@/features/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple | ReactUI Email",
  description:
    "Preview and code for the Apple Welcome Email template, built with Next.js and TailwindCSS for ReactUI Email.",
  keywords: [
    "ReactUI Email",
    "Apple Email Template",
    "TailwindCSS Email",
    "Next.js Email Templates",
    "Responsive Email Design",
    "Email Template Code",
    "React Email Components",
  ],
  openGraph: {
    title: "Apple | ReactUI Email",
    description:
      "Explore the Apple Welcome Email template, featuring a clean, responsive design and code preview, built with ReactUI Email.",
    url: "https://reactui.email/apple",
    images: [
      {
        url: "https://reactui.email",
        alt: "Apple Welcome Email Template Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple | ReactUI Email",
    description:
      "Check out the Apple Welcome Email template with preview and code, built with Next.js and TailwindCSS for ReactUI Email.",
    images: ["https://reactui.email"],
  },
  alternates: {
    canonical: "https://reactui.email/apple",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const fetchEmailData = async (brand: string, path: string) => {
  const source = await readBrandSource(brand, path);
  return { emailSource: source };
};

const Page = async () => {
  const brand = "apple";

  const appleWelcomeHtml = await render(<AppleWelcomeTemplate />);

  const { emailSource: appleWelcomeSource } = await fetchEmailData(brand, "welcome");

  return (
    <main>
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

          <TemplateLayout
            label="Welcome"
            emailHtml={appleWelcomeHtml}
            emailSource={appleWelcomeSource!}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
