"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@repo/ui/components/carousel";

type Logo = {
  id: string;
  description: string;
  image: string;
  className?: string;
};

type PartnersProps = {
  heading?: string;
  logos?: Logo[];
  className?: string;
};

function Partners({
  heading = "Technologies We Use",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
  ],
}: PartnersProps) {
  return (
    <section className="bg-obsidian px-2.5 lg:px-0 flex items-center justify-center">
      <div className="container bg-jet border-x max-w-[1200] px-5 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="lg:my-6 text-2xl text-pretty md:text-4xl lg:text-5xl">
            {heading}
          </h1>
        </div>
        <div className="pt-10 md:pt-12">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true })]}
            >
              <CarouselContent className="ml-0">
                {logos.map(logo => (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="mx-10 flex shrink-0 items-center justify-center">
                      <div>
                        {/* eslint-disable-next-line next/no-img-element */}
                        <img
                          src={logo.image}
                          alt={logo.description}
                          className={logo.className}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Partners };
