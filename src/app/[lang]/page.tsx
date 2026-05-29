import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import WhyKenyaSection from "@/components/WhyKenyaSection";
import StandardsSection from "@/components/StandardsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FlagshipProjectSection from "@/components/FlagshipProjectSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";

const SUPPORTED = ["sw", "en"];

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhyKenyaSection />
        <StandardsSection />
        <ProjectsSection />
        <FlagshipProjectSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
