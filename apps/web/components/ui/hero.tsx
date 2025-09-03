import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@repo/ui/components/button";

type Hero1Props = {
  badge?: string;
  heading: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
};

function Hero({
  heading = "All Your Financial Accounts in One Unified Dashboard",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: `Work with us`,
      url: "/contact-us",
    },
    secondary: {
      text: "About us",
      url: "/about-us",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) {
  return (
    <section className="bg-obsidian relative overflow-hidden px-2.5 lg:px-0 flex items-center justify-center">
      <div className="border-x relative container border px-5 max-w-[1200]">
        <div className="container">
          <div className="group pointer-events-none absolute inset-0 flex size-full flex-col items-center justify-center self-start">
            {/* eslint-disable-next-line next/no-img-element */}
            <img alt="hero background" loading="lazy" decoding="async" className="size-full object-cover absolute inset-0" src="/images/hero-background.webp" />
          </div>
          <div className="grid items-center py-12 gap-12 lg:grid-cols-[1fr_auto] lg:py-20 lg:pl-12">
            <div className="flex flex-col gap-5 lg:gap-8 items-center lg:items-start text-center lg:text-left">
              {/* Hero text */}
              <h1 className="text-foreground tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{heading}</h1>
              <p className="text-mid-gray text-base md:text-lg lg:text-xl">{description}</p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {buttons.primary && (
                  <Link href={buttons.primary.url}>
                    <Button className="w-full bg-ebony rounded-md text-secondary-foreground shadow-sm hover:bg-ebony/90 border border-charcoal h-12 px-6 py-[14px]">
                      {buttons.primary.text}
                      <ArrowRight className="" />
                    </Button>
                  </Link>
                )}
                {buttons.secondary && (
                  <Link href={buttons.secondary.url}>
                    <Button variant="outline" className="w-full border-none rounded-md bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-12 px-6 py-[14px]">
                      {buttons.secondary.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            {/* Hero image */}
            <div className="bg-overlay-gray rounded-sm p-2 sm:p-3 md:p-4 lg:rounded-md">
              <div className="relative aspect-[522/572] size-full overflow-hidden rounded-sm lg:min-h-[572px] lg:min-w-[522px] lg:rounded-md">
                {/* eslint-disable-next-line next/no-img-element */}
                <img src="/images/hero-image.png" alt={image.alt} className="w-full absolute size-full inset-0 object-cover object-left-top " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
