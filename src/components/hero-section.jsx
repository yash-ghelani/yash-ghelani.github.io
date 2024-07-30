'use client';

import React from 'react';
import { outift, fira } from '@/app/ui/fonts';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-cards';


const HeroSection = () => {
	return (
		<section>
			<div className='container'>
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className='mySwiper'
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper>
			</div>
			<h1
				className={`${outift.className} antialiased text-white text-6xl text-opacity-75 font-bold`}
			>
				Yash Ghelani
			</h1>
			<TypeAnimation
				sequence={['software engineer', 1000]}
				wrapper='span'
				speed={50}
				className={`${fira.className}`}
				style={{ fontSize: '2em', display: 'inline-block' }}
				repeat={Infinity}
			/>
            <Image src='/social/github.png' alt={'github icon'} width={50} height={50}/>
            <Image src='/social/linkedin.png' alt={'linkedin icon'} width={50} height={50}/>
            <Image src='/social/gmail.png' alt={'gmail icon'} width={50} height={50}/>
            <Image src='/social/instagram.png' alt={'instagram icon'} width={50} height={50}/>
            <Image src='/social/spotify.png' alt={'spotify icon'} width={50} height={50}/>
            <Image src='/social/chess.png' alt={'chess icon'} width={50} height={50}/>
		</section>
	);
};

export default HeroSection;
