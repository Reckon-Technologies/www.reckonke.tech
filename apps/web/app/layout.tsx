import type { Metadata } from "next";

import { Figtree } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "@repo/ui/globals.css";

import { Header } from "@/components/ui/header";
import { siteConfig } from "@/config/site";
import env from "@/lib/env";

const fontSans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: env.PROJECT_NAME,
    template: `%s | ${env.PROJECT_NAME}`,
  },
  description: siteConfig.description,
  keywords: [
    "SaaS",
    "Web development",
    "Web design",
    "Infra",
    "AI",
  ],
  authors: [
    {
      name: "Bret Mwenda",
      url: "https://www.linkedin.com/in/bret-mwenda/",
    },
  ],
  creator: "Bret Mwenda",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@br3tdev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased `}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-1 flex-col">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
