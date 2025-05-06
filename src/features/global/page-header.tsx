import { t } from "@/lib/utils";
import CliCommands from "./cli-commands";

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <>
      <div className="mb-12 text-left">
        <h1 className="mb-3 text-3xl font-extrabold capitalize tracking-tight text-foreground md:text-4xl">
          {t(title)}
        </h1>
        <p className="text-lg text-muted-foreground">{children}</p>
      </div>

      <div className="mb-12">
        <h1 className="mb-3 text-2xl font-extrabold capitalize tracking-tight text-foreground md:text-3xl">
          Install
        </h1>
        <p className="mb-4 text-base text-muted-foreground">
          Install component from your command line.
        </p>

        <CliCommands />
      </div>
    </>
  );
}
