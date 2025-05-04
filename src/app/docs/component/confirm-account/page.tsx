import PageHeader from "@/features/global/page-header";
import { readBrandSources } from "@/features/global/read-brand-source";
import { TemplateLayout } from "@/features/global/template-layout";
import { render } from "@/features/lib/email-to-html";
import { Metadata } from "next";
import Link from "next/link";
import path from "path";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Confirm Account | ReactUI Email",
  description:
    "Preview and code for the React Email Confirm Account component, built with Next.js and TailwindCSS for ReactUI Email.",
  keywords: [
    "ReactUI Email",
    "React Email Confirm Account",
    "TailwindCSS Email Components",
    "Next.js Email Templates",
    "Responsive Email Confirm Account",
    "Email Template Code",
    "React Email Components",
  ],
  openGraph: {
    title: "Confirm Account | ReactUI Email",
    description:
      "Explore the React Email Card component, featuring a clean, responsive design and code preview, built with ReactUI Email.",
    url: "https://reactui.email/confirm-account",
    images: [
      {
        url: "https://reactui.email/opengraph-confirm-account.jpg",
        alt: "React Email Confirm Account Component Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confirm Account | ReactUI Email",
    description:
      "Check out the React Email Confirm Account component with preview and code, built with Next.js and TailwindCSS for ReactUI Email.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/confirm-account",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ConfirmAccount = async () => {
  const component = "confirm-account";

  const componentSource = await readBrandSources(component, ["src", "email", "components"]);

  const componentPreview = await Promise.all(
    componentSource.map(async (source) => {
      const emailModule = await import(
        `@/email/components/${component}/${path.basename(source.filePath, ".tsx")}`
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
          <PageHeader title={"Confirm Account"}>
            A simple confirm account component with{" "}
            <Link href={"https://react.email"} className="hover:text-primary">
              React Email
            </Link>{" "}
            &&{" "}
            <Link href={"https://tailwindcss.com"} className="hover:text-primary">
              Tailwind CSS
            </Link>
          </PageHeader>

          {componentPreview.map((preview) => (
            <TemplateLayout
              component={component}
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

export default ConfirmAccount;
