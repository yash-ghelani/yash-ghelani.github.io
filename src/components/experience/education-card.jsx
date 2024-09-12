import React from 'react';
import Image from 'next/image';

const EducationCard = ({
	activeEducation,
	setActiveEducation,
	index,
	institutionName,
	institutionLogo,
	qualification,
	results,
	startDate,
	endDate,
	subjectList,
}) => {
	return (
		<div className='flex flex-row items-center'>
			<div
				className={`max-w-6 max-h-6 w-[4vw] h-[4vw] rounded-full -translate-x-1/2 transition-colors duration-500 ease ${
					activeEducation === index ? 'bg-white' : 'bg-white/25'
				}`}
			/>
			<div
				onClick={() => setActiveEducation(index)}
				className={`flex flex-col w-full text-clamp-xs bg-white/5 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-md p-[1.75em] gap-[2em] overflow-hidden cursor-pointer transition-height duration-300 ease ${
					activeEducation === index ? 'h-[25em]' : 'h-[8em]'
				}`}
			>
				<div className='flex flex-row justify-between items-center'>
					<div className='flex flex-col'>
						<h2 className='tracking-wider font-semibold'>
							{institutionName}
						</h2>
						<span className='font-thin'>{results}</span>
						<span className='font-thin'>
							{startDate} - {endDate}
						</span>
					</div>
					<Image
						src={institutionLogo}
						alt={institutionName + ' logo'}
						width={50}
						height={50}
						className='min-w-[30px] w-[15%] max-w-[70px]'
					/>
				</div>
				<div>
					<h2 className='tracking-wider font-semibold'>
						Key Subjects
					</h2>
					<div className='flex flex-col justify-between'>
						{subjectList.map((subject, index) => (
							<p key={index} className='font-thin py-[1em]'>
								- {subject}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EducationCard;
