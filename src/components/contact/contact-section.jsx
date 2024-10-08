'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Heading from '../general/heading';

const ContactSection = () => {
	// State for the form fields
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	// Handle input changes
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Construct mailto link dynamically
	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent page reload on form submission
		const { name, email, message } = formData;

		// Construct the mailto link
		const mailtoLink = `mailto:yashghelani@hotmail.com?subject=${encodeURIComponent(
			`${name} contacting from the website!`
		)}&body=${encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
		)}`;

		// Open the user's default mail client with the pre-filled email
		window.location.href = mailtoLink;
	};

	return (
		<section className='min-h-svh xl:max-w-[1280px] max-w-[600px] w-[80vw] m-auto flex flex-col justify-center'>
			<div className='flex flex-col gap-10 m-auto w-full'>
				<Heading>get in touch</Heading>

				<div className='flex flex-col xl:flex-row justify-between gap-20'>
					<form onSubmit={handleSubmit} className='w-full xl:w-1/2'>
						<div className='flex flex-col gap-2 mb-4'>
							<label
								htmlFor='name'
								className='block font-extralight opacity-55'
							>
								your name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full bg-white/5 rounded-2xl p-3 backdrop-blur-3xl border border-white/10 shadow-md'
							/>
						</div>

						<div className='flex flex-col gap-2 mb-4'>
							<label
								htmlFor='email'
								className='block font-extralight opacity-55'
							>
								your email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full bg-white/5 rounded-2xl p-3 backdrop-blur-3xl border border-white/10 shadow-md'
							/>
						</div>

						<div className='flex flex-col gap-2 mb-4'>
							<label
								htmlFor='message'
								className='block font-extralight opacity-55'
							>
								your message
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								className='w-full bg-white/5 rounded-2xl p-3 backdrop-blur-3xl border border-white/10 shadow-md'
							/>
						</div>

						<button
							type='submit'
							className='bg-white/5 rounded-full backdrop-blur-3xl border border-white/10 shadow-md px-10 py-2 my-10'
						>
							<span className='font-semibold tracking-widest opacity-55'>
								send
							</span>
						</button>
					</form>
					<Image
						src={'/social/paper-plane.png'}
						width={200}
						height={200}
						alt='Contact icon - paper plane'
						className='m-auto max-w-[50%]'
					/>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
