import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Ismahal — Milano",
  description: "Crafted by hand, worn for generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.style.fontFamily} ${montserrat.style.fontFamily} ${ebGaramond.style.fontFamily}`}>
      <body className="has-dark-hero">
        {children}
      </body>
    </html>
  );
}
