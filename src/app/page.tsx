import SiteHeader from "@/components/landing/SiteHeader";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Roles from "@/components/landing/Roles";
import SiwesBanner from "@/components/landing/SiwesBanner";
import Faq from "@/components/landing/Faq";
import FinalCta from "@/components/landing/FinalCta";
import SiteFooter from "@/components/landing/SiteFooter";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <Roles />
        <SiwesBanner />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
