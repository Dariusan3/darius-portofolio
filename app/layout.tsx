import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo',
});

export const metadata: Metadata = {
  title: "Portofolio - Osadici Darius",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8
        overflow-x-hidden`}
      >
        <div id="theme-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
