'use client';

import React from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

const Heading = ({ children }) => {
	const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
	const isVisible = entry?.isIntersecting;

	return (
		<h2
			ref={ref}
			className={`font-semibold tracking-widest text-clamp-xl transition-all duration-[1.5s] delay-300 ease-out ${
				isVisible
					? 'opacity-65 translate-y-0'
					: 'opacity-0 translate-y-10'
			}`}
		>
			{children}
		</h2>
	);
};

export default Heading;
