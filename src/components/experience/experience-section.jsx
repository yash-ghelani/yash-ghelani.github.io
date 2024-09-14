'use client';

import React, { useState } from 'react';
import ExperienceCard from './experience-card';
import EducationCard from './education-card';
import Heading from '../general/heading';

const ExperienceSection = () => {
	const experience = {
		roles: [
			{
				companyName: 'NBC Universal - Peacock TV',
				companyLogo: '/logos/peacock.jpeg',
				role: 'Software Engineer',
				startDate: 'Dec 2023',
				endDate: 'Present',
				summary:
					'Worked within the performance and syndication tech workstream. Delivered a multi-propositional, global streaming platform used for Peacock, Showmax, and other international joint ventures. Involved in key feature deliveries for events such as the NFL and the Paris 2024 Olympics.',
				techStack:
					'React, Typescript, Jenkins, Jest, Playwright, CSS Modules',
			},
			{
				companyName: 'Sky - Now TV',
				companyLogo: '/logos/nowtv.png',
				role: 'Software Engineer',
				startDate: 'Jul 2022',
				endDate: 'Dec 2023',
				summary:
					'Worked within the web client team for Now TV. Involved in the migration from desktop player to in browser playback. Worked with designers to create a design system for the application UI overhaul.',
				techStack:
					'React, Typescript, Jest, React Testing Library, Cypress, Playwright, Emotion',
			},
			{
				companyName: 'GlaxoSmithKline',
				companyLogo: '/logos/gsk.png',
				role: 'Software Engineer Intern',
				startDate: 'Jun 2020',
				endDate: 'Sep 2020',
				summary:
					'Built a Python pipeline to monitor behaviour from CCTV footage of dogs, using OpenCV and deep learning models to identify keyframes with unusual activity.',
				techStack:
					'Python, OpenCV, Pytorch, Seaborn, Pandas, Apache Airflows, PowerBI',
			},
		],
	};

	const education = {
		roles: [
			{
				institutionName: 'University of Sheffield',
				institutionLogo: '/logos/uos.jpg',
				qualification: 'BSc AI and Computer Science',
				results: 'BSc AI and Computer Science (1st Class Hons)',
				startDate: 'Sep 2018',
				endDate: 'Jul 2021',
				subjectList: [
					'Machine Learning Algorithms',
					'System Design & Security',
					'Data Driven Computing',
					'Algorithms & Data Structures',
				],
			},
			{
				institutionName: 'Nower Hill Sixth Form',
				institutionLogo: '/logos/nower-hill.png',
				qualification: 'A Level',
				results: "3 A Level's: A, A, A",
				startDate: 'Sep 2016',
				endDate: 'Jul 2018',
				subjectList: [
					'Mathematics (A)',
					'Computer Science (A)',
					'Chemistry (A)',
					'AS Biology (A)',
				],
			},
			{
				institutionName: 'Nower Hill High School',
				institutionLogo: '/logos/nower-hill.png',
				qualification: 'GCSE',
				results: "13 GCSE's: 7 A*'s | 6 A's",
				startDate: 'Sep 2011',
				endDate: 'Jul 2016',
				subjectList: [
					'Mathematics & Further Mathematics (A*, A)',
					'Computer Science (A*)',
					'English Language & Literature (A, A)',
					'Biology, Chemistry, Physics (A*, A*, A*)',
				],
			},
		],
	};

	const [activeExperience, setActiveExperience] = useState(0);
	const [activeEducation, setActiveEducation] = useState(0);

	return (
		<section className='min-h-svh xl:max-w-[1280px] max-w-[600px] w-[80vw] m-auto flex flex-col justify-center'>
			<div className='flex xl:flex-row flex-col xl:gap-10 m-auto w-full justify-between'>
				<div className='flex flex-col min-h-svh max-w-[600px] xl:w-[42.5%] w-full justify-center gap-10'>
					<Heading>education</Heading>
					<div className='flex flex-row'>
						<div className='w-[6px] bg-black/25 translate-x-1/2' />
						<div className='flex flex-col gap-[1em] w-full'>
							{education.roles.map((edu, index) => (
								<EducationCard
									activeEducation={activeEducation}
									setActiveEducation={setActiveEducation}
									index={index}
									key={edu.institutionName}
									{...edu}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='flex flex-col min-h-svh max-w-[600px] xl:w-[42.5%] w-full justify-center gap-8'>
					<Heading>experience</Heading>
					<div className='flex flex-row'>
						<div className='w-[6px] bg-black/25 translate-x-1/2' />
						<div className='flex flex-col gap-[1em] w-full'>
							{experience.roles.map((exp, index) => (
								<ExperienceCard
									activeExperience={activeExperience}
									setActiveExperience={setActiveExperience}
									index={index}
									key={exp.companyName}
									{...exp}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
