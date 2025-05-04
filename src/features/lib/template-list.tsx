import { BrandFramerSolid } from "@mynaui/icons-react";
import Image from "next/image";
import React from "react";
import { IoLogoDropbox, IoLogoGithub } from "react-icons/io5";
import { SiAirbnb, SiNike, SiNotion, SiStripe, SiWebflow } from "react-icons/si";

type LeadProps = {
  name: string;
  industry: string;
  href: string;
  logo: React.JSX.Element;
  live: boolean;
  update?: boolean;
}[];

export const lead: LeadProps = [
  {
    name: "Peerlist",
    industry: "Social Networking",
    href: "https://peerlist.io",
    logo: (
      <Image
        width={28}
        height={28}
        priority
        src="https://res.cloudinary.com/sutharjay/image/upload/v1737222539/me/peerlist.svg"
        alt="Peerlist"
      />
    ),
    update: false,
    live: true,
  },
  {
    name: "Framer",
    industry: "Design Tools",
    href: "https://framer.com",
    logo: <BrandFramerSolid className="h-8 w-8" />,
    live: true,
  },
  {
    name: "SubStack",
    industry: "Blog Platform",
    href: "https://substack.com",
    logo: (
      <Image
        width={28}
        height={28}
        priority
        src="https://res.cloudinary.com/sutharjay/image/upload/v1737300995/me/substack-icon.svg"
        alt="Substack"
      />
    ),
    live: true,
  },
  {
    name: "Notion",
    industry: "Productivity",
    href: "https://notion.so",
    logo: <SiNotion className="h-8 w-8 fill-black dark:fill-white" />,
    live: true,
  },
  {
    name: "Supabase",
    industry: "Database",
    href: "https://supabase.com",
    logo: (
      <Image
        width={28}
        height={28}
        priority
        src="https://res.cloudinary.com/sutharjay/image/upload/v1739700369/me/projects/reactui-email/logo/supabase.svg"
        className="rounded-md"
        alt="Supabase"
      />
    ),
    update: false,
    live: true,
  },
  {
    name: "Dub",
    industry: "URL Shortener",
    href: "https://dub.sh",
    logo: (
      <Image
        width={28}
        height={28}
        priority
        src="https://res.cloudinary.com/sutharjay/image/upload/v1739369064/me/projects/reactui-email/dub-co.png"
        className="rounded-md"
        alt="Dub.sh"
      />
    ),
    update: false,
    live: true,
  },
  {
    name: "Softgen",
    industry: "Software Development",
    href: "https://softgen.ai",
    logo: (
      <>
        <Image
          width={28}
          height={28}
          priority
          src="https://res.cloudinary.com/sutharjay/image/upload/v1740686276/me/projects/reactui-email/logo/softgen-dark.svg"
          className="h-[28px] w-[28px] rounded-md dark:hidden"
          alt="Softgen Logo Dark"
        />
        <Image
          width={28}
          height={28}
          priority
          src="https://res.cloudinary.com/sutharjay/image/upload/v1740686249/me/projects/reactui-email/logo/softgen-light.svg"
          className="hidden h-[28px] w-[28px] rounded-md dark:block"
          alt="Softgen Logo Light"
        />
      </>
    ),
    update: false,
    live: true,
  },
  {
    name: "Myna UI",
    industry: "UI Library",
    href: "https://mynaui.com",
    logo: (
      <>
        <Image
          width={28}
          height={28}
          priority
          src="https://res.cloudinary.com/sutharjay/image/upload/v1741637855/me/projects/reactui-email/logo/myna-ui-light.svg"
          className="h-[28px] w-[28px] rounded-md dark:hidden"
          alt="Myna UI Logo Dark"
        />
        <Image
          width={28}
          height={28}
          priority
          src="https://res.cloudinary.com/sutharjay/image/upload/v1741638547/me/projects/reactui-email/logo/myna-ui-dark.svg"
          className="hidden h-[28px] w-[28px] rounded-md dark:block"
          alt="Myna UI Logo Light"
        />
      </>
    ),
    update: false,
    live: true,
  },
  {
    name: "Airbnb",
    industry: "Hospitality",
    href: "https://airbnb.com",
    logo: <SiAirbnb className="h-8 w-8" color="#FF5A5F" />,
    live: false,
  },
  {
    name: "GitHub",
    industry: "Version Control",
    href: "https://github.com",
    logo: <IoLogoGithub className="h-8 w-8" />,
    live: false,
  },

  {
    name: "Webflow",
    industry: "Web Development",
    href: "https://webflow.com",
    logo: <SiWebflow className="h-8 w-8" color="#146ef5" />,
    live: false,
  },
  {
    name: "Stripe",
    industry: "Fintech",
    href: "https://stripe.com",
    logo: <SiStripe className="h-8 w-8" color="#626CD9" />,
    live: false,
  },
  {
    name: "Dropbox",
    industry: "Cloud Storage",
    href: "https://dropbox.com",
    logo: <IoLogoDropbox className="h-8 w-8" color="#0061FE" />,
    live: false,
  },
  {
    name: "Nike",
    industry: "Fashion",
    href: "https://nike.com",
    logo: <SiNike className="h-8 w-8" />,
    live: false,
  },
];
