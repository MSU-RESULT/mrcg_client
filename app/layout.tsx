import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import WhatsAppButton from "@/component/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://mrgcconsulting.com"),

  title: {
    default: "MRGC Consulting | Government Tenders & Global Trade Experts",
    template: "%s | MRGC Consulting"
  },

  description:
    "MRGC Consulting helps businesses win government tenders, navigate public procurement, and expand globally through export-import consulting and strategic advisory.",

  keywords: [
    "government tenders India",
    "GeM tenders consulting",
    "public procurement consulting",
    "export import consultant India",
    "bid management services",
    "global trade consulting",
    "MRGC Consulting"
  ],

  authors: [{ name: "MRGC Consulting" }],
  creator: "MRGC Consulting",
  publisher: "MRGC Consulting",

  openGraph: {
    title: "MRGC Consulting | Government Procurement & Global Strategy Experts",
    description:
      "Win tenders, scale globally, and navigate complex government systems with MRGC Consulting.",
    url: "https://mrgcconsulting.com",
    siteName: "MRGC Consulting",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "MRGC Consulting"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "MRGC Consulting",
    description:
      "Experts in government tenders, procurement, and global consulting.",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
    ]
  },

  robots: {
    index: true,
    follow: true
  }
};








export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html
  lang="en"
  className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
>
  
      <body className="min-h-full flex flex-col">
        <Navbar />
        <WhatsAppButton />
        {children}</body>
    </html>
  );
}
