import { BrandFramerSolid } from "@mynaui/icons-react";
import Image from "next/image";
import React from "react";
import { IoLogoApple, IoLogoDropbox, IoLogoGithub } from "react-icons/io5";
import { SiAirbnb, SiNike, SiStripe, SiWebflow } from "react-icons/si";
import { Brand } from "../types";

type LeadProps = {
  name: Brand;
  industry: string;
  href: string;
  logo: React.JSX.Element;
  live: boolean;
}[];

export const lead: LeadProps = [
  {
    name: "Apple",
    industry: "Technology",
    href: "https://apple.com",
    logo: <IoLogoApple className="h-8 w-8" />,
    live: true,
  },
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
