import Image from 'next/image';
import { useEffect, useState } from 'react';

const icons = [
	{ src: '/social/github.png', alt: 'github icon' },
	{ src: '/social/linkedin.png', alt: 'linkedin icon' },
	{ src: '/social/gmail.png', alt: 'gmail icon' },
	{ src: '/social/instagram.png', alt: 'instagram icon' },
	{ src: '/social/spotify.png', alt: 'spotify icon' },
	{ src: '/social/chess.png', alt: 'chess icon' },
];

const IconRow = () => {
	const [currentIcon, setCurrentIcon] = useState(-1);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIcon((prevIcon) => {
				if (prevIcon === icons.length - 1) {
					clearInterval(interval);
					return prevIcon + 1; // Stop updating after the last icon
				}
				return (prevIcon + 1) % icons.length;
			});
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex flex-row justify-center gap-5'>
			{icons.map((icon, index) => (
				<Image
					src={icon.src}
					alt={icon.alt}
					width={50}
					height={50}
					key={icon.src}
					className={`max-h-[50px] h-[7.5vw] w-auto transition-all duration-200 ease-in-out transform ${
						index === currentIcon
							? 'grayscale-0 translate-y-[-5px]'
							: 'grayscale'
					} hover:grayscale-0 hover:translate-y-[-5px]`}
				/>
			))}
		</div>
	);
};

export default IconRow;
