import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "react-feather";

import { Icons } from "@repo/ui/components/icons";

type FooterProps = {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
};

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Help", href: "#" },
  //     { name: "Sales", href: "#" },
  //     { name: "Advertise", href: "#" },
  //     { name: "Privacy", href: "#" },
  //   ],
  // },
];

const defaultSocialLinks = [
  { icon: <Instagram className="size-5 hover:text-muted-foreground transition-colors" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="size-5 hover:text-muted-foreground transition-colors" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-5 hover:text-muted-foreground transition-colors" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookie Settings", href: "#" },
];

function Footer({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Reckon",
  },
  sections = defaultSections,
  description = "Reckon Technologies is a financial technology company, not a bank. Banking services are provided by partner institutions and are FDIC-insured up to applicable limits.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Reckon.tech. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) {
  return (
    <section className="bg-obsidian px-2.5 lg:px-0 flex items-center justify-center">
      <div className="w-full bg-jet flex flex-col items-center justify-center max-w-[1200]">
        <div className="w-full block sm:flex bg-jet border-l">
          {sections.map(({ title, links }, _i) => (
            <div key={_i} className="w-full flex flex-col gap-4 border-r border-b border-dark-gray px-8 py-12 text-start">
              <p className="font-bold text-2xl">{title}</p>
              {/* Footer nav links */}
              <ul>
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full flex justify-start lg:justify-end gap-4 border-b border-r border-dark-gray px-8 py-12 text-start">
            {socialLinks.map(({ href, icon }, _i) => (
              <Link key={_i} href={href}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full bg-jet border-x border-b grid lg:grid-cols-2">
          <div className="border-b-dark-gray flex flex-col justify-center border-b px-6 py-10 lg:max-w-md lg:border-b-0 lg:px-8 lg:py-12">
            <div className="max-w-md">
              <p className="text-sm">Regulatory disclaimer</p>
              <div className="font-inter-tight text-mid-gray text-xs">
                {description}
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center px-6 py-10 lg:px-8 lg:py-12">
            <Icons.company_logo className="size-12 sm:size-14 lg:size-16" />
            <div className="flex flex-col text-[40px] sm:text-5xl font-semibold tracking-tighter">
              {logo.title}
            </div>
          </div>
        </div>
        <div className="w-full bg-jet flex flex-col md:flex-row items-start justify-center px-6 md:px-8 py-4 border-x">
          <p className="text-xs">
            {copyright}
          </p>
          <div className="flex flex-col md:flex-row gap-2 items-start justify-center mt-2 md:mt-0 md:ml-auto">
            {legalLinks.map(({ name, href }) => (
              <a key={name} href={href} className="text-xs hover:text-muted-foreground underline transition-colors">{name}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Footer };
