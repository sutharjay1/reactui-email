"use client";

import { QueryProvider } from "@/features/providers/query-provider";
import { EmailSendPopover } from "./email-popover";

const SendEmail = ({ html, label, brand }: { html: string; label: string; brand: string }) => {
  return (
    <QueryProvider>
      <EmailSendPopover html={html} label={label} brand={brand} />
    </QueryProvider>
  );
};

export default SendEmail;
