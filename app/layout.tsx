import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DM_Sans, Inter, Roboto, Reenie_Beanie, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie-beanie",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ann | Operations Partner",
  description:
    "Ann is an Operations Partner helping founders and creative business owners turn plans into real, working systems. Dubsado setups, CRM management, email campaigns, and operational support that keeps businesses moving.",
  keywords: [
    "Ann Operations Partner",
    "Executive Operations VA",
    "Dubsado Specialist",
    "CRM Setup",
    "Email Campaign Setup",
    "Operations Support for Founders",
    "Executive Assistant Operations",
  ],
  authors: [{ name: "Ann" }],
  openGraph: {
    title: "Ann | Operations Partner",
    description: "Operations Support for founders who are growing faster than their backend.",
    type: "website",
  },
  icons: {
    icon: "/ann.png",
    shortcut: "/ann.png",
    apple: "/ann.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dmSans.variable} ${inter.variable} ${roboto.variable} ${reenieBeanie.variable} ${bricolage.variable} antialiased`} suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}