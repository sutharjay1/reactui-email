"use client";

import { cn } from "@/features/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/features/ui/tooltip";

type Props = {
  emailPreviews: {
    fileName: string;
    content: string | null;
    emailHtml: string;
  }[];
};

const TagScroll = ({ emailPreviews }: Props) => {
  return (
    <div
      className={cn(
        "fixed bottom-2 right-4 z-50 flex -translate-y-1/2 flex-col items-end justify-end gap-2 md:bottom-auto md:top-1/2",
        "rounded-lg border bg-card p-2 text-card-foreground shadow-sm md:border-none",
      )}
    >
      <TooltipProvider>
        {emailPreviews.map((preview) => (
          <Tooltip key={preview.fileName} delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  document.getElementById(preview.fileName)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={cn(
                  "h-3 w-8 rounded-full transition-all hover:w-12",
                  "cursor-pointer hover:opacity-80",
                  "bg-secondary/90 hover:bg-secondary",
                )}
                aria-label={`Navigate to ${preview.fileName}`}
              />
            </TooltipTrigger>
            <TooltipContent side="left" className="mr-2 px-2 py-1 text-xs text-primary/75">
              {preview.fileName.replace(/ - .*/, "")}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default TagScroll;
