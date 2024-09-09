import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const PhotographySection = () => {
	return (
		<section className='min-h-svh max-w-[1280px] w-[80vw] m-auto flex flex-col justify-center border'>
			<div className='flex flex-col w-full gap-20 m-auto'>
				<h2 className='font-semibold tracking-widest text-clamp-xl opacity-55'>
					photography
				</h2>
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
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
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/1.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/2.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/3.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/4.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/5.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/6.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/7.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/8.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/9.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/10.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/11.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/12.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/13.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/14.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/15.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/16.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/17.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/18.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/19.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/20.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/21.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/22.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/23.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/24.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/25.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/26.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/27.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/28.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/29.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/30.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/31.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/32.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/33.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/34.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/35.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/36.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/37.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/38.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/39.png' />
					</SwiperSlide>
					<SwiperSlide className='!w-[300px] !h-[300px]'>
						<img className='block' src='/polaroids/40.png' />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default PhotographySection;
