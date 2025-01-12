import { CodeBlock } from "@/components/code-block";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import CopyButton from "@/components/copy-button";
import PageHeader from "@/components/page-header";
import { cn, t } from "@/features/lib/utils";
import { Card, CardContent } from "@/features/ui/card";
import { Separator } from "@/features/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/features/ui/tabs";
import { useEmail } from "@/hooks/use-email";

type Props = {
  params: Promise<{
    brand: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { brand } = await params;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { source, emailHtml } = await useEmail(brand);

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

          <div>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="flex h-7 items-center justify-start gap-x-2 rounded-md bg-transparent px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
                <TabsTrigger value="preview" className="h-[1.45rem] px-2 transition-all">
                  <p className="text-base font-medium tracking-tight">Preview</p>
                </TabsTrigger>
                <TabsTrigger value="code" className="h-[1.45rem] rounded-md px-2 transition-all">
                  <p className="text-base font-medium tracking-tight">Code</p>
                </TabsTrigger>
              </TabsList>

              <Separator className="mb-4 mt-2" />

              <TabsContent value="preview" className="space-y-4">
                <Card className="border-none bg-transparent pt-2 shadow-none">
                  <CardContent className="space-y-4 px-0 md:px-0">
                    <div dangerouslySetInnerHTML={{ __html: emailHtml }} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="space-y-4">
                <Card className="border-none bg-transparent pt-2 shadow-none">
                  <CardContent className="relative space-y-4 px-0 md:px-0">
                    <CodeBlockWrapper
                      expandButtonTitle="Expand"
                      className={cn("my-6 overflow-hidden rounded-md")}
                    >
                      <CodeBlock lang="tsx">{source as string}</CodeBlock>
                      <CopyButton componentSource={source!} />
                    </CodeBlockWrapper>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
