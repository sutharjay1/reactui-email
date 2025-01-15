import { Separator } from "@/features/ui/separator";
import { BrandGithubSolid, BrandX } from "@mynaui/icons-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sutharjay1",
    icon: <BrandGithubSolid size={20} strokeWidth={2} />,
  },
  {
    name: "Peerlist",
    url: "https://peerlist.io/sutharjay",
    icon: (
      <Image
        width={24}
        height={24}
        src="https://res.cloudinary.com/sutharjay/image/upload/v1733359803/me/peerlist.svg"
        alt="Peerlist"
      />
    ),
  },
  {
    name: "Twitter",
    url: "https://x.com/sutharjay0",
    icon: <BrandX size={20} strokeWidth={2} />,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full pb-4 pt-12 md:pb-0 md:pt-16">
        <Separator className="my-8 h-[1px] rounded-full bg-ring/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ReactUI Email Templates. All rights reserved.
          </p>
          <div className="mb-2 flex items-center space-x-4 md:mb-0">
            {socialLinks.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                aria-hidden="true"
              >
                <label
                  className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-background transition-colors hover:bg-accent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring/70"
                  htmlFor={link.name}
                  aria-hidden="true"
                >
                  {link.icon}
                </label>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
