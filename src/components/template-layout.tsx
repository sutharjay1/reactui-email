import { cn } from "@/features/lib/utils";
import { Card, CardContent } from "@/features/ui/card";
import { Separator } from "@/features/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/features/ui/tabs";
import { CodeBlock } from "./code-block";
import { CodeBlockWrapper } from "./code-block-wrapper";
import CopyButton from "./copy-button";

type Props = {
  label: string;
  emailSource: string;
  emailHtml: string;
};

export const TemplateLayout = ({ label, emailHtml, emailSource }: Props) => {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-3xl">
        {label}
      </h1>
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
          <Card className="border border-ring/10 bg-transparent p-0 shadow-none dark:border-ring/10">
            <CardContent className="space-y-4 p-0 px-0 md:px-0">
              <div
                dangerouslySetInnerHTML={{ __html: emailHtml }}
                className="overflow-hidden rounded-lg p-4"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="relative space-y-4 px-0 md:px-0">
              <CodeBlockWrapper
                expandButtonTitle="Expand"
                className={cn("mb-6 overflow-hidden rounded-md")}
              >
                <CodeBlock lang="tsx">{emailSource as string}</CodeBlock>
                <CopyButton componentSource={emailSource!} />
              </CodeBlockWrapper>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="mb-12 mt-4" />
    </div>
  );
};
