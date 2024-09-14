import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import Heading from '../general/heading';

const PhotographySection = () => {
	const polaroids = [
		'/polaroids/1.png',
		'/polaroids/2.png',
		'/polaroids/3.png',
		'/polaroids/4.png',
		'/polaroids/5.png',
		'/polaroids/6.png',
		'/polaroids/7.png',
		'/polaroids/8.png',
		'/polaroids/9.png',
		'/polaroids/10.png',
		'/polaroids/11.png',
		'/polaroids/12.png',
		'/polaroids/13.png',
		'/polaroids/14.png',
		'/polaroids/15.png',
		'/polaroids/16.png',
		'/polaroids/17.png',
		'/polaroids/18.png',
		'/polaroids/19.png',
		'/polaroids/20.png',
		'/polaroids/21.png',
		'/polaroids/22.png',
		'/polaroids/23.png',
		'/polaroids/24.png',
		'/polaroids/25.png',
		'/polaroids/26.png',
		'/polaroids/27.png',
		'/polaroids/28.png',
		'/polaroids/29.png',
		'/polaroids/30.png',
		'/polaroids/31.png',
		'/polaroids/32.png',
		'/polaroids/33.png',
		'/polaroids/34.png',
		'/polaroids/35.png',
		'/polaroids/36.png',
		'/polaroids/37.png',
		'/polaroids/38.png',
		'/polaroids/39.png',
		'/polaroids/40.png',
	];

	return (
		<section className='min-h-svh xl:max-w-[1280px] max-w-[600px] w-[80vw] m-auto flex flex-col justify-center'>
			<div className='flex flex-col w-full gap-20 m-auto'>
				<Heading>photography</Heading>
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					speed={1000}
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					loop={true}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					modules={[Autoplay, EffectCoverflow]}
					className='mySwiper w-full'
				>
					{polaroids.map((src, index) => (
						<SwiperSlide className='max-w-[300px]' key={index}>
							<Image
								src={src}
								alt={'polaroid ' + index}
								width={300}
								height={300}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default PhotographySection;
