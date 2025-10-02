import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { jakarta, cormorant } from "./font";
import "./globals.css"

// Elegant serif for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Modern sans for body
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amadu Massally | Author & Visionary",
  description:
    "Discover the works of Amadu Massally, acclaimed author of five powerful books. Explore his journey, download free PDFs, and connect with his vision.",
  keywords: [
    "Amadu Massally",
    "Amadu Massally books",
    "African literature",
    "modern author",
    "philosophy books",
    "download free PDF books",
    "literature 2025",
  ],
  openGraph: {
    title: "Amadu Massally | Author & Visionary",
    description:
      "Explore the official website of Amadu Massally. Learn about his five books, download free PDFs, and connect with his story.",
    url: "https://www.amadumassally.com", // replace with live domain
    siteName: "Amadu Massally",
    images: [
      {
        url: "/og-image.jpg", // Add an OG image later in public/
        width: 1200,
        height: 630,
        alt: "Amadu Massally Author Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amadu Massally | Author & Visionary",
    description:
      "Premium author website showcasing Amadu Massally's five published books.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jakarta.variable} ${cormorant.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
