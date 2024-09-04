import React from 'react';

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

const Aura = ({
	color = COLORS.Pink,
	position = POSITIONS.TopLeft,
}) => {
	return (
		<div
			className={`absolute ${position} w-[60vw] h-[60vw] ${color} opacity-40 rounded-full filter blur-3xl z-[0]`}
		/>
	);
};

export default Aura;
