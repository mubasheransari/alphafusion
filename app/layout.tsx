import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/site";

// Self-hosted variable fonts (no network request at build or runtime).
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const sora = localFont({
  src: "./fonts/Sora-Variable.woff2",
  variable: "--font-sora",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Alpha Fusion Ltd — Digital growth studio",
    template: "%s — Alpha Fusion Ltd",
  },
  description:
    "Alpha Fusion builds brands, campaigns, products and platforms that move small, mid and enterprise businesses forward. Animation, digital marketing, web and mobile app development.",
  openGraph: {
    title: "Alpha Fusion Ltd — Digital growth studio",
    description:
      "Animation, digital marketing, web design & development and mobile apps for small, mid and enterprise businesses.",
    url: SITE.url,
    siteName: "Alpha Fusion Ltd",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07060f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} h-full`}
      style={{ colorScheme: "dark" }}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
