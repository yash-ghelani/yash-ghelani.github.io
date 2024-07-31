'use client';

import React from 'react';
import { outift, fira } from '@/app/ui/fonts';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import IconRow from './icon-row';

const HeroSection = () => {
	return (
		<section className='flex flex-col min-h-svh'>
			<div className='flex flex-col justify-center items-center gap-14 m-auto'>
				<Image
					src={'/images/memoji-edit.png'}
					width={200}
					height={500}
					alt='memoji'
					className='m-auto'
				/>

				<h1
					className={`${outift.className} antialiased text-8xl font-bold text-center`}
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
						'designer',
						4000,
						'mobile developer',
						4000,
						'amateur photographer',
						4000,
						'traveller',
						4000,
					]}
					wrapper='span'
					speed={50}
					className={`${fira.className} m-auto text-white`}
					style={{ fontSize: '2em', display: 'inline-block' }}
					repeat={Infinity}
				/>

				<IconRow />
			</div>
		</section>
	);
};

export default HeroSection;
