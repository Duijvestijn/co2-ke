import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CO2.ke",
  alternateName: ["Kenya Carbon Credits", "Mikopo ya Kaboni Kenya"],
  url: "https://co2.ke",
  description:
    "Kenya's carbon market gateway — Rift Valley forests, Maasai Mara savannas, and coastal mangroves under Verra VCS and Gold Standard.",
  areaServed: { "@type": "Country", name: "Kenya" },
  knowsAbout: [
    "Carbon Credits Kenya", "Nature Restoration Kenya", "Rift Valley REDD+",
    "Maasai Mara Carbon", "Mangrove Restoration Kenya", "Verra VCS Kenya", "Kenya NDC",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "CO2.ke — Kenya's Carbon Market Gateway",
    template: "%s | CO2.ke",
  },
  description:
    "Kenya's carbon market gateway. Verified CO₂ credits from Rift Valley forests, Maasai Mara savannas, coastal mangroves, and county afforestation programmes.",
  keywords: [
    "carbon credits Kenya", "nature restoration Kenya", "Rift Valley carbon",
    "Kenya carbon market", "REDD+ Kenya", "mangrove carbon Kenya",
    "mikopo ya kaboni Kenya", "masoko ya kaboni Kenya",
  ],
  openGraph: {
    type: "website",
    siteName: "CO2.ke",
    url: "https://co2.ke",
    title: "CO2.ke — Kenya's Carbon Market Gateway",
    description: "Kenya holds East Africa's greatest carbon potential.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://co2.ke"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sw" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-ke-dark text-ke-sand antialiased overflow-x-hidden font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
