import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";
import Script from "next/script";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CO2.ke",
  alternateName: ["Kenya Carbon Credits", "Mikopo ya Kaboni Kenya"],
  url: "https://co2.ke",
  description:
    "Kenya's carbon market gateway — Mount Kenya agroforestry, Maasai Mara savannas, and coastal mangroves under Verra VCS and Gold Standard.",
  areaServed: { "@type": "Country", name: "Kenya" },
  knowsAbout: [
    "Carbon Credits Kenya", "Nature Restoration Kenya", "Mount Kenya Agroforestry",
    "Maasai Mara Carbon", "Mangrove Restoration Kenya", "Verra VCS Kenya", "Kenya NDC",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "CO2.ke — Kenya's Carbon Market Gateway",
    template: "%s",
  },
  description:
    "Kenya's carbon market gateway. Verified CO₂ credits from Mount Kenya agroforestry, Maasai Mara savannas, coastal mangroves, and county afforestation programmes.",
  keywords: [
    "carbon credits Kenya", "nature restoration Kenya", "Rift Valley carbon",
    "Kenya carbon market", "agroforestry carbon Kenya", "mangrove carbon Kenya",
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
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K4PLFMMV');`}
      </Script>
      <body className="bg-ke-dark text-ke-sand antialiased overflow-x-hidden font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4PLFMMV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LenisProvider>{children}</LenisProvider>
        <Script id="hs-script-loader" src="//js.hs-scripts.com/8515463.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
