import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Gupta — Digital Marketing Specialist",
  description:
    "Rahul Gupta is a Digital Marketing Specialist and Social Media Expert from Faridabad — Meta Ads, Google Ads, SEO, reels and content that grows brands.",
  openGraph: {
    title: "Rahul Gupta — Digital Marketing Specialist",
    description: "Meta Ads · Google Ads · SEO · Social Media · Team Management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Caveat:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
