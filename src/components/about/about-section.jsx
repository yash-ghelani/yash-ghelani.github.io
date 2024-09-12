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
		// TODO: Make note of section structure in notion
		<section className='min-h-svh xl:max-w-[1280px] max-w-[600px] w-[80vw] m-auto flex flex-col justify-center'>
			<div className='flex flex-col gap-10 m-auto w-full'>
				<h2 className='font-semibold tracking-widest text-clamp-xl opacity-55'>
					about me
				</h2>
				<div className='flex xl:flex-row flex-col xl:justify-between gap-20'>
					<div className='xl:text-clamp-base text-clamp-sm font-thin flex flex-col gap-[2em] max-w-[600px] max-h-[500px] xl:w-[40%] w-full'>
						<p>
							Hey! I’m Yash, a Software Engineer based in London.
							I’ve had the opportunity to work in a range of
							industries, from pharma to streaming. This diverse
							experience has given me a unique perspective and a
							toolkit to tackle all sorts of tech challenges.
						</p>
						<p>
							I created this website to showcase my experience,
							skills, and various technical projects. It’s my
							little corner of the internet to share what I do and
							love.
						</p>
						<p>
							When I’m not coding, you can find me on the
							badminton court, in the gym, or playing chess. These
							hobbies keep me balanced and always learning, both
							physically and mentally.
						</p>
						<p>
							Feel free to explore my portfolio and get in touch
							if you’d like to collaborate or just chat about
							tech! 💻 🚀
						</p>
					</div>
					<div className='xl:w-[40%]'>
						<Swiper
							effect={'cards'}
							grabCursor={true}
							loop={true}
							modules={[EffectCards]}
							className='mySwiper max-w-[500px] xl:w-[100%] w-[80%]'
						>
							<SwiperSlide>
								<Image
									src={'/images/polaroid00.png'}
									alt={'polaroid of chess in new york'}
									width={500}
									height={500}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid0.png'}
									alt={'polaroid of monkeys in india'}
									width={500}
									height={500}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid1.png'}
									alt={'polaroid of the O2'}
									width={500}
									height={500}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid2.png'}
									alt={'polaroid of the yamuna ghat'}
									width={500}
									height={500}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid3.png'}
									alt={'polaroid in a wigwam cafe'}
									width={500}
									height={500}
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
