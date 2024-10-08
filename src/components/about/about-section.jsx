'use client';
// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Heading from '../general/heading';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { Autoplay, EffectCards } from 'swiper/modules';

const AboutSection = () => {
	return (
		// TODO: Make note of section structure in notion
		<section className='min-h-svh xl:max-w-[1280px] max-w-[600px] w-[80vw] m-auto flex flex-col justify-center'>
			<div className='flex flex-col gap-10 m-auto w-full'>
				<Heading>about me</Heading>
				<div className='flex xl:flex-row flex-col xl:justify-between gap-20'>
					<div className='xl:text-clamp-base text-clamp-sm font-thin flex flex-col gap-[2em] max-w-[600px] max-h-[500px] xl:w-[40%] w-full'>
						<p>
							Hey! I’m Yash, a Full Stack Software Engineer based
							in London. Currently building performant and
							engaging UI for Peacock TV, dabbling in cross
							platform apps in my spare time, and travelling as
							much as possible.
						</p>
						<p>
							I created this website to showcase my skills,
							projects and photography. It’s my little corner of
							the internet to share what I do.
						</p>
						<p>
							When I’m not coding, you can find me on the
							badminton court, in the gym, or playing chess. Feel
							free to explore my portfolio and get in touch if
							you’d like to collaborate or just chat about tech!
							💻 🚀
						</p>
					</div>
					<div className='xl:w-[40%]'>
						<Swiper
							effect={'cards'}
							grabCursor={true}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							rewind={true}
							speed={1000}
							modules={[Autoplay, EffectCards]}
							className='mySwiper max-w-[400px] xl:w-[100%] w-[80%]'
						>
							<SwiperSlide>
								<Image
									src={'/images/polaroid00.png'}
									alt={'polaroid of chess in new york'}
									width={400}
									height={400}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid0.png'}
									alt={'polaroid of monkeys in india'}
									width={400}
									height={400}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid1.png'}
									alt={'polaroid of the O2'}
									width={400}
									height={400}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid2.png'}
									alt={'polaroid of the yamuna ghat'}
									width={400}
									height={400}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/polaroid3.png'}
									alt={'polaroid in a wigwam cafe'}
									width={400}
									height={400}
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
