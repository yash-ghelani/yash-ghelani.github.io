import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Heading from '../general/heading';
import ProjectCard from './project-card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { projects } from './projects.json';

const ProjectsSection = () => {
	return (
		<section className='min-h-svh xl:max-w-[1280px] max-w-[600px] w-[80vw] m-auto flex flex-col justify-center'>
			<div className='flex flex-col gap-10 m-auto w-full'>
				<Heading>projects</Heading>
				<Swiper
					className='w-full'
					spaceBetween={50}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{projects.map((project, index) => (
						<SwiperSlide key={index}>
							<ProjectCard {...project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default ProjectsSection;
