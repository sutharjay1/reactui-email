import PageHeader from "@/components/page-header";
import { t } from "@/features/lib/utils";

type Props = {
  params: Promise<{
    brand: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { brand } = await params;

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
        </div>
      </div>
    </main>
  );
};

export default Page;
