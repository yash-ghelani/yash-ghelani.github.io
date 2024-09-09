import React from 'react';

const SkillsSection = () => {
	const skills = {
		skills: [
			{
				type: 'Front-End Development',
				icon: 'fa-html5', // Example: FontAwesome icon class for HTML5
				stack: [
					'HTML5',
					'CSS3',
					'JavaScript (ES6+)',
					'React.js',
					'Angular',
					'Vue.js',
					'SASS',
					'Bootstrap',
					'Tailwind CSS',
				],
			},
			{
				type: 'Back-End Development',
				icon: 'fa-server', // Example: FontAwesome icon class for back-end
				stack: [
					'Node.js',
					'Express.js',
					'Ruby on Rails',
					'Django',
					'Flask',
					'ASP.NET',
					'GraphQL',
				],
			},
			{
				type: 'Databases',
				icon: 'fa-database', // Example: FontAwesome icon class for database
				stack: [
					'PostgreSQL',
					'MySQL',
					'Firebase',
					'MongoDB',
					'SQLite',
					'Redis',
				],
			},
			{
				type: 'Version Control and CI/CD',
				icon: 'fa-git-alt', // Example: FontAwesome icon class for Git
				stack: [
					'Git',
					'GitHub',
					'GitLab',
					'Bitbucket',
					'Jenkins',
					'Travis CI',
					'CircleCI',
				],
			},
			{
				type: 'Cloud Platforms & DevOps',
				icon: 'fa-cloud', // Example: FontAwesome icon class for cloud
				stack: [
					'AWS',
					'Azure',
					'Google Cloud',
					'Docker',
					'Kubernetes',
					'Heroku',
					'Terraform',
				],
			},
			{
				type: 'Machine Learning and AI',
				icon: 'fa-brain', // Example: FontAwesome icon class for machine learning/AI
				stack: [
					'PyTorch',
					'TensorFlow',
					'Keras',
					'Scikit-learn',
					'OpenCV',
					'Pandas',
					'NumPy',
				],
			},
			{
				type: 'Testing & Debugging',
				icon: 'fa-vial', // Example: FontAwesome icon class for testing
				stack: [
					'Jest',
					'Mocha',
					'Chai',
					'Cypress',
					'Selenium',
					'Postman',
					'JUnit',
				],
			},
			{
				type: 'Mobile & Cross-Platform Development',
				icon: 'fa-mobile-alt', // Example: FontAwesome icon class for mobile development
				stack: [
					'React Native',
					'Flutter',
					'Ionic',
					'Swift',
					'Kotlin',
					'Xamarin',
				],
			},
		],
	};

	return (
		<section className='m-auto max-w-[1280px] p-10 min-h-svh flex flex-col justify-center gap-5'>
			<h2 className='font-semibold tracking-widest text-5xl opacity-55'>
				skills
			</h2>
			<div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-10'>
				{skills.skills.map((skill, index) => (
					<div
						key={index}
						className='flex flex-col h-auto bg-white/5 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-md p-6 gap-10 '
					>
						{skill.type}
                        {skill.stack.map((lib, idx) => {
                            
                        })}
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
