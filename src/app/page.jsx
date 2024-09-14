'use client';
import { useState, useEffect } from 'react';
import AboutSection from '@/components/about/about-section';
import Aura, { COLORS, POSITIONS } from '@/components/aura/aura';
import ContactSection from '@/components/contact/contact-section';
import ExperienceSection from '@/components/experience/experience-section';
import FooterSection from '@/components/footer/footer-section';
import HeroSection from '@/components/hero/hero-section';
import Loading from '@/components/loading/loading';
import PhotographySection from '@/components/photography/photography-section';
import SkillsSection from '@/components/skills/skills-section';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate a loading delay of 5 seconds
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 5000); // 5 seconds delay

		// Cleanup the timeout when the component unmounts
		return () => clearTimeout(timeout);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<main className='flex flex-col overflow-hidden'>
			<section className='relative'>
				<Aura color={COLORS.Pink} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Cyan} position={POSITIONS.TopRight} />
				<HeroSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Orange} position={POSITIONS.MidLeft} />
				<AboutSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Purple} position={POSITIONS.BottomRight} />
				<Aura color={COLORS.Cyan} position={POSITIONS.TopLeft} />
				<ExperienceSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Red} position={POSITIONS.BottomRight} />
				<Aura color={COLORS.Blue} position={POSITIONS.TopRight} />
				<SkillsSection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Pink} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Orange} position={POSITIONS.TopRight} />
				<PhotographySection />
			</section>
			<section className='relative'>
				<Aura color={COLORS.Purple} position={POSITIONS.BottomLeft} />
				<Aura color={COLORS.Blue} position={POSITIONS.TopRight} />
				<ContactSection />
			</section>
			<FooterSection />
		</main>
	);
}
