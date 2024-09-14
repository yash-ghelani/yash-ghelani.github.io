'use client'; // Ensure this is a client component

import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

export const COLORS = {
	Pink: 'bg-pink-500',
	Blue: 'bg-blue-500',
	Orange: 'bg-orange-500',
	Purple: 'bg-purple-500',
	Cyan: 'bg-sky-500',
	Red: 'bg-red-500',
};

export const POSITIONS = {
	TopLeft: 'left-1/2 top-1/3',
	MidLeft: 'left-1/2 top-1/2 transform -translate-y-1/2',
	BottomLeft: 'left-1/2 bottom-1/3',
	TopRight: 'right-1/2 top-1/3',
	MidRight: 'right-1/2 top-1/2 transform -translate-y-1/2',
	BottomRight: 'right-1/2 bottom-1/3',
};

const Aura = ({ color = COLORS.Pink, position = POSITIONS.TopLeft }) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [ref, entry] = useIntersectionObserver({
		threshold: 0.05,
	});
	const isVisible = entry?.isIntersecting;

	// Mouse movement effect
	useEffect(() => {
		const handleMouseMove = (e) => {
			const { innerWidth, innerHeight } = window;

			const moveDistance = innerHeight / 3;

			// Mouse-based movement offset
			const mouseX =
				(e.clientX / innerWidth) * moveDistance - moveDistance / 2;
			const mouseY =
				(e.clientY / innerHeight) * moveDistance - moveDistance / 2;

			// Set mouse movement offset
			setOffset({
				x: mouseX,
				y: mouseY,
			});
		};

		// Add mousemove listener
		window.addEventListener('mousemove', handleMouseMove);

		// Cleanup function
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`absolute z-[-1] ${position} transition-opacity duration-[3000ms] delay-500 ease-in-out opacity-65 ${
				isVisible ? 'opacity-65' : 'opacity-65'
			}`}
		>
			<div
				style={{
					transform: `translate(${offset.x}px, ${offset.y}px)`,
				}}
				className={`md:w-[100vh] md:h-[100vh] w-[75vh] h-[75vh] ${color} rounded-full filter blur-[300px] transition-transform ease-out duration-[1000ms]`}
			/>
		</div>
	);
};

export default Aura;
