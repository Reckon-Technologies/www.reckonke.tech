import { Book, Menu, PhoneCall, Sunset, Trees, Zap } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui/components/accordion";
import { Button } from "@repo/ui/components/button";
import { Logos } from "@repo/ui/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/ui/components/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@repo/ui/components/sheet";

type MenuItem = {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
};

type Navbar1Props = {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  ctaButton?: {
    login: {
      title: string;
      url: string;
    };
    cta: {
      title: string;
      url: string;
    };
  };
};

function Header({
  logo = {
    url: siteConfig.url,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: siteConfig.name,
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description: "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  ctaButton = {
    login: { title: "Login", url: "#" },
    cta: { title: `Let's Talk`, url: "#" },
  },
}: Navbar1Props) {
  return (
    <header className="relative bg-obsidian z-50 h-20 border-b px-2.5 lg:px-0 flex w-full justify-center">
      <div className="w-full border-r-dark-gray border-l-dark-gray container flex h-20 items-center border px-6 max-w-[1200]">
        <div className="w-full">
          {/* Desktop Menu */}
          <nav className="flex justify-between">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <Logos.company_logo className="size-8 lg:size-11" />
                <div className="flex flex-col text-xl font-semibold tracking-tighter">
                  {logo.title}
                  <span className="hidden lg:inline-block text-[8px] tracking-wide">TECHNOLOGIES</span>
                </div>
              </a>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <div className="hidden lg:flex">
                <NavigationMenu>
                  <NavigationMenuList>{menu.map(item => renderMenuItem(item))}</NavigationMenuList>
                </NavigationMenu>
              </div>

              <Button asChild className="bg-ebony h-9 rounded-md text-secondary-foreground shadow-sm hover:bg-ebony/90 border border-charcoal">
                <a href={ctaButton.cta.url}>
                  {ctaButton.cta.title}
                  <PhoneCall className="ml-1" />
                </a>
              </Button>
              <ModeToggle />
              {/* Mobile Menu */}
              <div className="block lg:hidden">
                <div className="flex items-center justify-between">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Menu className="size-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>
                          <a href={logo.url} className="flex items-center gap-2">
                            <Logos.company_logo className="max-h-8" />
                          </a>
                        </SheetTitle>
                      </SheetHeader>
                      <div className="flex flex-col gap-6 p-4">
                        <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                          {menu.map(item => renderMobileMenuItem(item))}
                        </Accordion>

                        <div className="flex flex-col gap-3">
                          <Button asChild>
                            <div className="flex">
                              <a href={ctaButton.cta.url}>{ctaButton.cta.title}</a>
                              <PhoneCall className="ml-1" />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

function renderMenuItem(item: MenuItem) {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map(subItem => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-transparent hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function renderMobileMenuItem(item: MenuItem) {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">{item.title}</AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map(subItem => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
}

function SubMenuLink({ item }: { item: MenuItem }) {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && <p className="text-muted-foreground text-sm leading-snug">{item.description}</p>}
      </div>
    </a>
  );
}

export { Header };
