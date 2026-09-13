import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.lang} className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
