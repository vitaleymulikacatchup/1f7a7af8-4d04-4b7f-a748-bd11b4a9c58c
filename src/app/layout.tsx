import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VibeCrypto: vibrant crypto landing with playful trends",
  description: "VibeCrypto invites you into a vibrant, playful crypto world. Clear steps to learn and buy, transparent tokenomics, and a community-first vibe.",
  keywords: ["crypto", "coin", "token", "buy crypto", "tokenomics", "community", "vibe", "landing page", "meme coin", "web3", "trendy"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "VibeCrypto: vibrant crypto landing with playful trends",
    description: "VibeCrypto invites you into a vibrant, playful crypto world. Clear steps to learn and buy, transparent tokenomics, and a community-first vibe.",
    type: "website",
    url: "/",
    siteName: "VibeCrypto",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/a-flat-cartoon-portrait-of-an-anthropomo-1759644900473-39efc8ea.jpg", width: 1200, height: 630, alt: "VibeCrypto mascot with glowing tokens in a colorful hero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCrypto: vibrant crypto landing with playful trends",
    description: "VibeCrypto invites you into a vibrant, playful crypto world. Clear steps to learn and buy, transparent tokenomics, and a community-first vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/a-flat-cartoon-portrait-of-an-anthropomo-1759644900473-39efc8ea.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}