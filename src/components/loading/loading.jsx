// components/Loading.js
import React from 'react';
import './loading.css'; // Import the CSS for animation

const Loading = () => {
	return (
		<div className='fixed inset-0 bg-[#101331] flex items-center justify-center z-50'>
			<div className='loading-text'>
				<span className='initial'>Y</span>
				<span className='initial'>G</span>
			</div>
		</div>
	);
};

export default Loading;
