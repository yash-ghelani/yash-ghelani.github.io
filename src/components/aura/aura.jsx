'use client'; // Ensure this is a client component

import React, { useState, useEffect } from 'react';

export const COLORS = {
	Pink: 'bg-pink-500',
	Blue: 'bg-blue-500',
	Orange: 'bg-orange-500',
	Purple: 'bg-purple-500',
	Cyan: 'bg-sky-500',
	Red: 'bg-red-500',
};

export const POSITIONS = {
	TopLeft: '-left-1/4 top-1/3',
	MidLeft: '-left-1/4 top-1/2 transform -translate-y-1/2',
	BottomLeft: '-left-1/4 bottom-1/3',
	TopRight: '-right-1/4 top-1/3',
	MidRight: '-right-1/4 top-1/2 transform -translate-y-1/2',
	BottomRight: '-right-1/4 bottom-1/3',
};

const Aura = ({ color = COLORS.Pink, position = POSITIONS.TopLeft }) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			const { innerWidth, innerHeight } = window;

			// Mouse-based movement offset
			const mouseX = (e.clientX / innerWidth) * 500 - 250; // Centering at 0
			const mouseY = (e.clientY / innerHeight) * 500 - 250; // Centering at 0

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
			className={`absolute ${position} md:w-[100vh] md:h-[100vh] w-[75vh] h-[75vh] ${color} opacity-75 rounded-full filter blur-[300px] z-[-1]`}
			style={{
				transform: `translate(${offset.x}px, ${offset.y}px)`,
				transition: 'transform 0.65s ease-out', // Smooth movement for mouse following
			}}
		/>
	);
};

export default Aura;
