import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { projectImages } from './project-images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProjectCard = ({ title, description, images, techStack, links }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='bg-white/5 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-md mb-[3em] p-6 flex flex-col xl:flex-row gap-6'>
      <div className='xl:w-[50%] w-full'>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className='mySwiper2 rounded-xl overflow-hidden'
        >
          {images.map((src, index) => {
            const image = projectImages[src] ?? src;

            return (
              <SwiperSlide key={`${src}-${index}`}>
                <div className='relative h-[260px] sm:h-[320px] lg:h-[360px] w-full'>
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    sizes='(min-width: 1280px) 50vw, 80vw'
                    className='object-contain object-center'
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView='auto'
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mt-4 !mx-auto !w-fit max-w-full'
        >
          {images.map((src, index) => {
            const image = projectImages[src];

            if (!image) return null;

            return (
              <SwiperSlide
                key={`${src}-${index}`}
                className='!w-auto rounded-lg overflow-hidden bg-black/20'
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className='h-[72px] sm:h-[88px] w-auto object-contain'
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='flex flex-col xl:w-[50%] w-full gap-4'>
        <h3 className='text-clamp-base font-semibold'>{title}</h3>
        <p className='text-clamp-xs font-thin'>{description}</p>
        <h4 className='text-clamp-sm font-semibold'>Tech Stack:</h4>
        <div className=''>
          <p className='text-clamp-xs font-thin'>
            {techStack.map((tech) => tech.name).join(', ')}
          </p>
        </div>
        <div className='flex flex-row gap-4 mt-auto'>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white/10 rounded-full px-4 py-2 text-clamp-xs font-semibold tracking-widest hover:bg-white/20 transition-colors'
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
