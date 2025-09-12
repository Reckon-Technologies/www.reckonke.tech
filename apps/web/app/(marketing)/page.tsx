import { Footer } from "@/components/ui/footer";
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

      <section className="bg-obsidian px-2.5 lg:px-0 flex items-center justify-center">
        <div className="max-w-[1200] flex-1 border h-10" />
      </section>
      <Footer />
    </div>
  );
}
