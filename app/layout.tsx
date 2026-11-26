import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xenasflavorlab.com"),

  title: "Xena's Flavor Lab | Private Chef NYC",

  description:
    "Elevated private dining, bespoke menus and unforgettable culinary experiences in New York City.",

  openGraph: {
    title: "Xena's Flavor Lab",
    description:
      "The art and science of flavor. Private dining, catering and exceptional culinary experiences.",
    url: "/",
    siteName: "Xena's Flavor Lab",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xena's Flavor Lab",
    description: "Private Chef & Culinary Experiences in NYC.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
