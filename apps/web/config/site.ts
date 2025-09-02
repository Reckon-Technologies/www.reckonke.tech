import env from "@/lib/env";

export const siteConfig = {
  name: "Reckon",
  url: env.NEXT_PUBLIC_URL,
  ogImage: `${env.NEXT_PUBLIC_URL}/og.webp`,
  description: "We help startups and scale-ups build AI-powered SaaS apps faster—with battle-tested code and founder-friendly terms. Launch your MVP in weeks, not months.",
  links: {
    twitter: "https://twitter.com/reckon_tech",
    linkedIn: "https://linkedin.com/company/reckon-technologies",
  },
};

export type SiteConfig = typeof siteConfig;
