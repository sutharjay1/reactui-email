import PageHeader from "@/features/global/page-header";
import { readBrandSources } from "@/features/global/read-brand-source";
import { TemplateLayout } from "@/features/global/template-layout";
import { render } from "@/features/lib/email-to-html";
import { Metadata } from "next";
import Link from "next/link";
import path from "path";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Grid | ReactUI Email",
  description:
    "Preview and code for the React Email Grid component, built with Next.js and TailwindCSS for ReactUI Email.",
  keywords: [
    "ReactUI Email",
    "React Email Grid",
    "TailwindCSS Email Components",
    "Next.js Email Templates",
    "Responsive Email Grid",
    "Email Template Code",
    "React Email Components",
  ],
  openGraph: {
    title: "Grid | ReactUI Email",
    description:
      "Explore the React Email Grid component, featuring a clean, responsive design and code preview, built with ReactUI Email.",
    url: "https://reactui.email/grid",
    images: [
      {
        url: "https://reactui.email/opengraph-image.jpg",
        alt: "React Email Grid Component Preview",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grid | ReactUI Email",
    description:
      "Check out the React Email Grid component with preview and code, built with Next.js and TailwindCSS for ReactUI Email.",
    images: ["https://reactui.email/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://reactui.email/grid",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Header = async () => {
  const component = "grid";

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
          <PageHeader title={"grid"}>
            A simple header component with{" "}
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
              badge={preview.fileName.split("+")[1]}
              component={component}
              id={preview.fileName}
              key={preview.fileName}
              label={preview.fileName.split("+")[0]}
              emailHtml={preview.emailHtml}
              emailSource={preview.content as string}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Header;
