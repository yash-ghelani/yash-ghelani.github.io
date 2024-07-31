import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/hero/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-900">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
