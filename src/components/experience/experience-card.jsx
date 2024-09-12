import React from 'react';
import Image from 'next/image';

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
				className={`max-w-6 max-h-6 w-[4vw] h-[4vw] rounded-full -translate-x-1/2 transition-colors duration-500 ease ${
					activeExperience === index ? 'bg-white' : 'bg-white/25'
				}`}
			/>
			<div
				onClick={() => setActiveExperience(index)}
				className={`flex flex-col w-full text-clamp-xs bg-white/5 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-md p-[1.75em] gap-[2em] overflow-hidden cursor-pointer transition-height duration-300 ease ${
					activeExperience === index ? 'h-[25em]' : 'h-[8em]'
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
						alt={companyName + ' logo'}
						width={50}
						height={50}
						className='min-w-[30px] w-[15%] max-w-[70px]'
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
