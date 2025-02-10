import { Bona_Nova, Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const bonaNova = Bona_Nova({
  variable: "--font-bona-nova",
  subsets: ["latin"],
  weight: ["400", "700"],
});
