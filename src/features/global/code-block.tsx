import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import CopyButton from "./copy-button";

type Props = {
  children: string;
  lang: BundledLanguage;
  label: string;
};

export async function CodeBlock(props: Props) {
  const code = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "houston",
  });

  const fileName =
    props.label?.toLowerCase().replaceAll(" ", "-") + (props.lang === "html" ? ".html" : ".tsx");

  return (
    <section className="rounded-lg border border-primary/10">
      <div className="flex items-center justify-between rounded-b-none rounded-t-lg bg-zinc-950 px-4 py-3">
        <p className="text-sm font-medium text-muted-foreground">{fileName}</p>
        <CopyButton componentSource={props.children} />
      </div>
      <div
        className="bg-zinc-950 dark:bg-zinc-900 [&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-fit [&_pre]:overflow-auto [&_pre]:rounded-lg [&_pre]:bg-zinc-950 [&_pre]:p-4 [&_pre]:leading-snug [&_pre]:dark:bg-zinc-900"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </section>
  );
}
