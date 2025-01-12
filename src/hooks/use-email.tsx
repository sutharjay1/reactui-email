import { readBrandSource } from "@/components/read-brand-source";
import { AppleReceiptEmail } from "@/email/apple/page";
import { render } from "../features/lib/email-to-html";

export const useEmail = async (brand: string) => {
  const source = await readBrandSource(brand, "page");
  // const SourceComponent = () => <div dangerouslySetInnerHTML={{ __html: source! }} />;

  const emailHtml = await render(<AppleReceiptEmail />);

  return {
    source,
    emailHtml,
  };
};
