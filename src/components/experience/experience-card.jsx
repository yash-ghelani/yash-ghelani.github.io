'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ExperienceCard = ({
	activeExperience,
	setActiveExperience,
	index,
	companyName,
	companyLogo,
	role,
	startDate,
	endDate,
	summary,
	techStack,
}) => {
	return (
		<div className='flex flex-row items-center'>
			<div
				className={`w-6 h-6 rounded-full -translate-x-1/2 transition-colors duration-500 ease ${
					activeExperience === index ? 'bg-white' : 'bg-white/25'
				}`}
			/>
			<div
				onClick={() => setActiveExperience(index)}
				className={`flex flex-col bg-white/5 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-md w-[500px] p-6 gap-10 overflow-hidden cursor-pointer transition-height duration-300 ease-in-out ${
					activeExperience === index ? 'h-[400px]' : 'h-[125px]'
				}`}
			>
				<div className='flex flex-row justify-between items-center'>
					<div className='flex flex-col'>
						<h2 className='tracking-wider font-semibold'>
							{companyName}
						</h2>
						<span className='font-thin'>{role}</span>
						<span className='font-thin'>
							{startDate} - {endDate}
						</span>
					</div>
					<Image
						src={companyLogo}
						alt={companyName + ''}
						width={50}
						height={50}
						className='h-[70px] w-auto'
					/>
				</div>
				<div>
					<h2 className='tracking-wider font-semibold'> Summary: </h2>
					<p className='font-thin'>{summary}</p>
				</div>
				<div>
					<h2 className='tracking-wider font-semibold'>
						Tech stack:
					</h2>
					<p className='font-thin'>{techStack}</p>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
