'use client';
// Import Swiper React components
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

const AboutSection = () => {
	return (
		<section className='flex flex-row min-h-screen w-3/4 m-auto items-center gap-48'>
			<div className='flex flex-col w-1/2 gap-10'>
				<h2 className='font-semibold tracking-widest text-4xl opacity-55'>
					about me
				</h2>
				<div className='text-lg opcaity-75 flex flex-col gap-10'>
					<p>
						Hey! I’m Yash, a Software Engineer based in London with
						a passion for everything tech. I’ve had the opportunity
						to work in a range of industries, from pharma to
						streaming. This diverse experience has given me a unique
						perspective and a toolkit to tackle all sorts of tech
						challenges.
					</p>
					<p>
						I created this website to showcase my experience,
						skills, and various technical projects. It’s my little
						corner of the internet to share what I do and love.
					</p>
					<p>
						When I’m not coding, you can find me on the badminton
						court, in the gym, or playing chess. These hobbies keep
						me balanced and always learning, both physically and
						mentally.
					</p>
					<p>
						Feel free to explore my portfolio and get in touch if
						you’d like to collaborate or just chat about tech! 💻 🚀
					</p>
				</div>
			</div>
			<div className='flex flex-col w-1/2'>
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className='mySwiper w-[500px] h-[500px]'
				>
					<SwiperSlide>
						<Image
							src={'/images/polaroid0.png'}
							alt={''}
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={'/images/polaroid1.png'}
							alt={''}
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={'/images/polaroid2.png'}
							alt={''}
							width={500}
							height={500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={'/images/polaroid3.png'}
							alt={''}
							width={500}
							height={500}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default AboutSection;
