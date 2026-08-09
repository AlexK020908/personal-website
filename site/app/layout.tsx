import type { Metadata, Viewport } from "next";
import { site, SITE_URL } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — software engineer & ML researcher`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Alex Kang",
    "Zixuan Kang",
    "software engineer",
    "machine learning",
    "LLM research",
    "UBC",
    "Columbia",
    "Clawlet",
    "StackBrief",
    "infra-designer",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: `${site.name} — software engineer & ML researcher`,
    description: site.tagline,
    siteName: site.name,
    images: [{ url: "/profile.png", width: 1200, height: 1600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — software engineer & ML researcher`,
    description: site.tagline,
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
