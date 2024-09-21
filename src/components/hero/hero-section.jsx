'use client';

import React, { useState, useEffect } from 'react';
import { outift, fira } from '@/app/ui/fonts';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import IconRow from './icon-row';

import './hero.css';

const HeroSection = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section
			className={`flex flex-col min-h-svh w-[70vw] m-auto opacity-0 ${
				isVisible ? 'fade-in' : ''
			}`}
		>
			<div className='flex flex-col justify-center items-center gap-[5vh] m-auto'>
				<Image
					src={'/images/memoji-edit.png'}
					className='m-auto max-w-[200px] w-[50%]'
					width={200}
					height={500}
					alt='memoji'
				/>

				<h1
					className={`${outift.className} antialiased sm:text-8xl text-6xl font-bold text-center`}
					style={{
						color: '#ffffff',
						textShadow: `
              0 0 5px rgba(236, 72, 153, 0.35),   /* Pink glow */
              0 0 10px rgba(236, 72, 153, 0.35),  /* Pink glow */
              0 0 15px rgba(236, 72, 153, 0.35),  /* Pink glow */
              0 0 20px rgba(37, 99, 235, 0.35),   /* Blue glow */
              0 0 25px rgba(37, 99, 235, 0.35),   /* Blue glow */
              0 0 30px rgba(37, 99, 235, 0.35)    /* Blue glow */
            `,
					}}
				>
					Yash Ghelani
				</h1>

				<TypeAnimation
					sequence={[
						'software engineer',
						4000,
						'ai & cs graduate',
						4000,
						'designer',
						4000,
						'mobile developer',
						4000,
						'amateur photographer',
						4000,
					]}
					wrapper='span'
					speed={50}
					className={`${fira.className} m-auto text-white sm:text-4xl text-xl text-center`}
					style={{ display: 'inline-block' }}
					repeat={Infinity}
				/>

				<IconRow />
			</div>
		</section>
	);
};

export default HeroSection;
