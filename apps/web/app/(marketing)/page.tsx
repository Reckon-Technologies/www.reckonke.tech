import { Hero } from "@/components/ui/hero";
import { Partners } from "@/components/ui/partners";

export default function Home() {
  return (
    <div className="">
      <Hero
        heading="Building Solutions to Simplifying Your Business"
        description="We help companies grow with our best ecommerce solutions, ERP, CRM and custom development solutions."
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          alt: "Hero section demo image showing interface components",
        }}
      />
      <Partners />

      <div className="my-20" />
    </div>
  );
}
