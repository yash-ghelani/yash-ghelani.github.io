import React from 'react';

const FooterSection = () => {
	return (
		<div className='flex flex-col justify-between items-center w-full gap-7 mt-20'>
			<span className='font-light tracking-widest opacity-55'>
				Designed & Built by Yash Ghelani.
			</span>
			<div className='w-full h-3 bg-gradient-to-r from-[#CE1DB1] to-[#1D59CE]' />
		</div>
	);
};

export default FooterSection;
