'use client';

import AboutSection from '@/components/about/about-section';
import Aura, { COLORS, POSITIONS } from '@/components/aura/aura';
import ContactSection from '@/components/contact/contact-section';
import ExperienceSection from '@/components/experience/experience-section';
import FooterSection from '@/components/footer/footer-section';
import HeroSection from '@/components/hero/hero-section';
import PhotographySection from '@/components/photography/photography-section';
import SkillsSection from '@/components/skills/skills-section';

export default function Home() {
	return (
		<main className='flex flex-col overflow-hidden'>
			<section className='relative'>
				<Aura color={COLORS.Pink} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Cyan} position={POSITIONS.TopRight} />
				<HeroSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Orange} position={POSITIONS.MidLeft} />
				<Aura color={COLORS.Blue} position={POSITIONS.TopRight} />
				<AboutSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Red} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Purple} position={POSITIONS.TopRight} />
				<ExperienceSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Red} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Blue} position={POSITIONS.TopRight} />
				<SkillsSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Red} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Blue} position={POSITIONS.TopRight} />
				<PhotographySection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Red} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Blue} position={POSITIONS.TopRight} />
				<ContactSection />
			</section>
			<FooterSection />
		</main>
	);
}
