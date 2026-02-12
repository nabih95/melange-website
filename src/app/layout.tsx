import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mel'angé by Melissa | Mobile Food Cart for Events | Montreal",
  description:
    "Premium mobile food cart service for your events in Montreal. Mini pancakes, candy bars, charcuterie, and more. Book Mel'angé by Melissa for your next celebration!",
  icons: {
    icon: "/melange-website/favicon.png",
    shortcut: "/melange-website/favicon.png",
    apple: "/melange-website/favicon.png",
  },
  openGraph: {
    title: "Mel'angé by Melissa",
    description: "Premium mobile food cart service for your events in Montreal.",
    url: "https://nabih95.github.io/melange-website/",
    siteName: "Mel'angé by Melissa",
    images: [
      {
        url: "https://nabih95.github.io/melange-website/og-image.png",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mel'angé by Melissa",
    description: "Premium mobile food cart service for your events in Montreal.",
    images: ["https://nabih95.github.io/melange-website/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
