import { t } from "@/features/lib/utils";

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="mb-16 text-left">
      <h1 className="mb-3 text-3xl font-extrabold capitalize tracking-tight text-foreground md:text-4xl">
        {t(title)}
      </h1>
      <p className="text-lg text-muted-foreground">{children}</p>
    </div>
  );
}
