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
		<section className='m-auto max-w-[1280px] p-10 h-svh flex flex-col justify-center gap-5 overflow-hidden'>
			<h2 className='font-semibold tracking-widest text-5xl opacity-55'>
				about me
			</h2>
			<div className='flex xl:flex-row flex-col  gap-[75px] xl:gap-[100px] justify-center'>
				<div className='text-xl font-extralight flex flex-col gap-10 max-w-[500px]'>
					<p>
						Hey! I’m Yash, a Software Engineer based in London. I’ve
						had the opportunity to work in a range of industries,
						from pharma to streaming. This diverse experience has
						given me a unique perspective and a toolkit to tackle
						all sorts of tech challenges.
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
				<div className='flex flex-col max-w-full md:max-w-1/2 px-[50px]'>
					<Swiper
						effect={'cards'}
						grabCursor={true}
						modules={[EffectCards]}
						className='mySwiper max-w-[500px] max-h-[500px]'
					>
						<SwiperSlide>
							<Image
								src={'/images/polaroid00.png'}
								alt={'polaroid of chess in new york'}
								layout='responsive'
								width={500}
								height={500}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/images/polaroid0.png'}
								alt={'polaroid of monkeys in india'}
								layout='responsive'
								width={500}
								height={500}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/images/polaroid1.png'}
								alt={'polaroid of the O2'}
								layout='responsive'
								width={500}
								height={500}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/images/polaroid2.png'}
								alt={'polaroid of the yamuna ghat'}
								layout='responsive'
								width={500}
								height={500}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/images/polaroid3.png'}
								alt={'polaroid in a wigwam cafe'}
								layout='responsive'
								width={500}
								height={500}
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
