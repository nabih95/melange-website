import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Mel'angé by Melissa",
    description: "Premium mobile food cart service for your events in Montreal.",
    url: "https://melangemtl.com/",
    siteName: "Mel'angé by Melissa",
    images: [
      {
        url: "https://melangemtl.com/og-image.png",
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
    images: ["https://melangemtl.com/og-image.png"],
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
