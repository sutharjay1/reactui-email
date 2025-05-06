"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  emailPreviews: {
    fileName: string;
    content: string | null;
    emailHtml: string;
  }[];
};

const TagScroll = ({ emailPreviews }: Props) => {
  const handleValueChange = (value: string) => {
    document.getElementById(value)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          "fixed z-50 hidden -translate-y-1/2 flex-col items-end justify-end gap-2 md:bottom-auto md:top-1/2 md:flex",
          "rounded-lg border bg-card p-2 text-card-foreground shadow-sm md:border-none",
        )}
      >
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
      </div>

      <div
        className={cn(
          "sticky top-4 z-50 mx-3 my-2 mt-40 flex flex-col items-start justify-start gap-2 text-card-foreground md:hidden",
        )}
      >
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-full p-2 px-4">
            <SelectValue placeholder="Jump to email" />
          </SelectTrigger>
          <SelectContent className="p-2">
            {emailPreviews.map((preview) => (
              <SelectItem key={preview.fileName} value={preview.fileName}>
                {preview.fileName.replace(/ - .*/, "")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </TooltipProvider>
  );
};

export default TagScroll;
