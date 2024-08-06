import AboutSection from '@/components/about/about-section';
import ExperienceSection from '@/components/experience/experience-section';
import FooterSection from '@/components/footer/footer-section';
import HeroSection from '@/components/hero/hero-section';

export default function Home() {
	return (
		<main className='flex flex-col bg-[#101331]'>
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
      <FooterSection />
		</main>
	);
}
