import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifat Ashfiha Khan | Graphic Designer",
  description: "Creative graphic designer specializing in brand identity, UI/UX, and digital experiences. Based in Dhaka, Bangladesh.",
  keywords: [
    "graphic designer",
    "UI/UX designer",
    "brand identity",
    "visual designer",
    "digital artist",
    "Dhaka",
    "Bangladesh",
    "creative portfolio",
    "brand design",
    "motion graphics"
  ],
  authors: [{ name: "Rifat Ashfiha Khan" }],
  creator: "Rifat Ashfiha Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashfiha.vercel.app",
    title: "Rifat Ashfiha Khan | Graphic Designer",
    description: "Creative graphic designer specializing in brand identity, UI/UX, and digital experiences",
    siteName: "Rifat Ashfiha Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifat Ashfiha Khan | Graphic Designer",
    description: "Creative graphic designer specializing in brand identity, UI/UX, and digital experiences",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
