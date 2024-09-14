import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const icons = [
	{
		src: '/social/github.png',
		alt: 'github icon',
		link: 'https://www.linkedin.com/in/yashghelani/',
	},
	{
		src: '/social/linkedin.png',
		alt: 'linkedin icon',
		link: 'https://www.linkedin.com/in/yashghelani/',
	},
	{
		src: '/social/gmail.png',
		alt: 'gmail icon',
		link: 'mailto:yashghelani08@gmail.com',
	},
	{
		src: '/social/instagram.png',
		alt: 'instagram icon',
		link: 'https://www.instagram.com/yash_ghelani',
	},
	{
		src: '/social/spotify.png',
		alt: 'spotify icon',
		link: 'https://open.spotify.com/user/ddg.yash',
	},
	{
		src: '/social/chess.png',
		alt: 'chess icon',
		link: 'https://www.chess.com/member/fa1ledgamb1t',
	},
];

const IconRow = () => {
	const [currentIcon, setCurrentIcon] = useState(-1);
	const intervalRef = useRef(null); // Using useRef for interval
	const timeoutRef = useRef(null); // Using useRef for timeout

	useEffect(() => {
		// Delay the start of the animation for the first icon by 2 seconds
		timeoutRef.current = setTimeout(() => {
			// Set interval to start switching icons after the first one
			intervalRef.current = setInterval(() => {
				setCurrentIcon((prevIcon) => {
					if (prevIcon === icons.length - 1) {
						clearInterval(intervalRef.current);
						return prevIcon + 1; // Stop updating after the last icon
					} else {
						return (prevIcon + 1) % icons.length;
					}
				});
			}, 300);
		}, 2000); // 2 second delay before starting the first animation

		// Cleanup the interval and timeout on component unmount
		return () => {
			clearTimeout(timeoutRef.current); // Clear timeout on cleanup
			clearInterval(intervalRef.current); // Clear interval on cleanup
		};
	}, []);

	return (
		<div className='flex flex-row justify-center gap-5'>
			{icons.map((icon, index) => (
				<a
					href={icon.link}
					target='_blank'
					rel='noopener noreferrer'
					key={icon.src}
				>
					<Image
						src={icon.src}
						alt={icon.alt}
						width={50}
						height={50}
						className={`max-h-[50px] h-[7.5vw] w-auto transition-all duration-300 ease-in-out transform ${
							index === currentIcon
								? 'grayscale-0 translate-y-[-5px]'
								: 'grayscale'
						} hover:grayscale-0 hover:translate-y-[-5px]`}
					/>
				</a>
			))}
		</div>
	);
};

export default IconRow;
