'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function RavensBrewCaseStudy() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Left Side Navigation */}
			<div className='md:w-64 lg:w-72 md:fixed md:h-screen p-8 flex flex-col justify-between'>
				<div>
					{/* Logo */}
					<div className='mb-12'>
						<Link href='/' className='block'>
							<div className='w-16 h-16 relative mb-4'>
								<Image
									src='/images/logo.png'
									alt='Nicholas Gould Photography'
									width={64}
									height={64}
									className='object-contain'
									priority
								/>
							</div>
							<motion.h1
								className='text-lg tracking-wide'
								initial={{ opacity: 0, y: 10 }}
								animate={isLoaded ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								Nicholas Gould
							</motion.h1>
						</Link>
					</div>

					{/* Main Navigation */}
					<nav className='space-y-6'>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Link
								href='/photography'
								className='block text-muted-foreground tracking-wide text-sm hover:text-primary transition-colors'
							>
								PHOTOGRAPHY
							</Link>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Link
								href='/case-studies'
								className='block text-foreground tracking-wide text-sm hover:text-primary transition-colors'
							>
								CASE STUDIES
							</Link>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Link
								href='/about'
								className='block text-muted-foreground tracking-wide text-sm hover:text-primary transition-colors'
							>
								ABOUT
							</Link>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Link
								href='/contact'
								className='block text-muted-foreground tracking-wide text-sm hover:text-primary transition-colors'
							>
								CONTACT
							</Link>
						</motion.div>
					</nav>
				</div>

				{/* Social Links */}
				<motion.div
					className='hidden md:block'
					initial={{ opacity: 0 }}
					animate={isLoaded ? { opacity: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<div className='flex space-x-4 mb-4'>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<rect
									width='20'
									height='20'
									x='2'
									y='2'
									rx='5'
									ry='5'
								/>
								<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
								<line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
							</svg>
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
								<rect width='4' height='12' x='2' y='9' />
								<circle cx='4' cy='4' r='2' />
							</svg>
						</a>
						<a
							href='https://behance.net'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M1 12h6v4H1z' />
								<path d='M8 8h6v8H8z' />
								<path d='M15 4h6v12h-6z' />
							</svg>
						</a>
					</div>
					<p className='text-xs text-muted-foreground'>
						© {new Date().getFullYear()} Nicholas Gould
					</p>
				</motion.div>
			</div>

			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8'>
				<div className='max-w-[75%] mx-auto'>
					<div className='mb-8'>
						<Link
							href='/case-studies'
							className='inline-flex items-center text-muted-foreground hover:text-foreground transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='mr-2'
							>
								<path d='M19 12H5M12 19l-7-7 7-7' />
							</svg>
							Back to Case Studies
						</Link>
					</div>

					<motion.h1
						className='text-2xl mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={isLoaded ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Ravens Brew Coffee
					</motion.h1>

					<div className='space-y-12'>
						{/* Project Overview */}
						<motion.section
							initial={{ opacity: 0, y: 30 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 0.4 }}
						>
							<motion.h2
								className='text-xl mb-4'
								initial={{ opacity: 0, y: 20 }}
								animate={isLoaded ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.5 }}
							>
								Project Overview
							</motion.h2>
							<motion.p
								className='text-muted-foreground mb-4'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								Ravens Brew Coffee is a specialty coffee roaster
								based in Alaska, known for their distinctive
								packaging and high-quality beans. They
								approached me to create a series of product
								photographs that would showcase their coffee
								packaging and highlight the craftsmanship behind
								their products.
							</motion.p>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 0.7 }}
							>
								The goal of this project was to create a
								collection of clean, professional product shots
								alongside lifestyle imagery that would convey
								the premium nature of their coffee and connect
								with their target audience of coffee
								enthusiasts.
							</motion.p>
						</motion.section>

						{/* Approach */}
						<motion.section
							initial={{ opacity: 0, y: 30 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 0.6 }}
						>
							<motion.h2
								className='text-xl mb-4'
								initial={{ opacity: 0, y: 20 }}
								animate={isLoaded ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.7 }}
							>
								Approach
							</motion.h2>
							<motion.p
								className='text-muted-foreground mb-4'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								For this project, I took a two-pronged approach:
							</motion.p>
							<motion.ul
								className='list-disc list-inside text-muted-foreground space-y-2 mb-4'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								<li>
									Clean product shots that highlighted the
									packaging design and details of the coffee
									bags
								</li>
								<li>
									Lifestyle imagery showing the coffee in
									natural settings, emphasizing the connection
									to nature that is central to the Ravens Brew
									brand
								</li>
							</motion.ul>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 1.0 }}
							>
								I used natural lighting whenever possible to
								create a warm, inviting atmosphere that would
								resonate with coffee lovers. For the product
								shots, I employed careful composition and
								styling to showcase the unique artwork on each
								coffee bag.
							</motion.p>
						</motion.section>

						{/* Results */}
						<motion.section
							initial={{ opacity: 0, y: 30 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 0.8 }}
						>
							<motion.h2
								className='text-xl mb-6'
								initial={{ opacity: 0, y: 20 }}
								animate={isLoaded ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								Results
							</motion.h2>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
								<motion.div
									className='aspect-[4/5] relative overflow-hidden'
									initial={{ opacity: 0, scale: 0.95 }}
									animate={
										isLoaded ? { opacity: 1, scale: 1 } : {}
									}
									transition={{ duration: 0.8, delay: 1.0 }}
									whileHover={{ scale: 1.03 }}
								>
									<Image
										src='/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg'
										alt='Ravens Brew Coffee Packaging'
										fill
										sizes='(max-width: 768px) 100vw, 33vw'
										className='object-cover'
									/>
								</motion.div>
								<motion.div
									className='aspect-[4/5] relative overflow-hidden'
									initial={{ opacity: 0, scale: 0.95 }}
									animate={
										isLoaded ? { opacity: 1, scale: 1 } : {}
									}
									transition={{ duration: 0.8, delay: 1.1 }}
									whileHover={{ scale: 1.03 }}
								>
									<Image
										src='/images/optimized_images/2_product_lifestyle_ravens_brew_ferns.jpg'
										alt='Ravens Brew Coffee Pour Over'
										fill
										sizes='(max-width: 768px) 100vw, 33vw'
										className='object-cover'
									/>
								</motion.div>
								<motion.div
									className='aspect-[4/5] relative overflow-hidden'
									initial={{ opacity: 0, scale: 0.95 }}
									animate={
										isLoaded ? { opacity: 1, scale: 1 } : {}
									}
									transition={{ duration: 0.8, delay: 1.2 }}
									whileHover={{ scale: 1.03 }}
								>
									<Image
										src='/images/optimized_images/1_product_lifestyle_ravens_brew_deadmans_reach_on_stump.jpg'
										alt='Ravens Brew Coffee Beans'
										fill
										sizes='(max-width: 768px) 100vw, 33vw'
										className='object-cover'
									/>
								</motion.div>
							</div>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 1.3 }}
							>
								The final images were used across Ravens Brew
								Coffee's marketing channels, including their
								website, social media, and print materials. The
								photography helped to elevate their brand image
								and showcase their products in a way that
								resonated with their target audience.
							</motion.p>
						</motion.section>

						{/* Key Challenges */}
						<motion.section
							initial={{ opacity: 0, y: 30 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 1.0 }}
						>
							<motion.h2
								className='text-xl mb-4'
								initial={{ opacity: 0, y: 20 }}
								animate={isLoaded ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 1.1 }}
							>
								Key Challenges
							</motion.h2>
							<motion.p
								className='text-muted-foreground mb-4'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 1.2 }}
							>
								One of the main challenges in this project was
								capturing the rich colors and textures of the
								coffee packaging while maintaining a natural,
								authentic feel. The Ravens Brew packaging
								features intricate artwork that needed to be
								showcased clearly without losing the organic
								quality of the product.
							</motion.p>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 1.3 }}
							>
								Additionally, creating lifestyle images that
								felt genuine rather than staged required careful
								planning and execution. I worked to create
								scenes that coffee lovers could relate to,
								emphasizing the ritual and enjoyment of brewing
								and drinking quality coffee.
							</motion.p>
						</motion.section>

						{/* Client Feedback */}
						<motion.section
							initial={{ opacity: 0, y: 30 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 1.2 }}
						>
							<motion.h2
								className='text-xl mb-4'
								initial={{ opacity: 0, y: 20 }}
								animate={isLoaded ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 1.3 }}
							>
								Client Feedback
							</motion.h2>
							<motion.blockquote
								className='border-l-2 border-primary pl-4 italic text-muted-foreground'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 1.4 }}
							>
								"Nicholas captured our products beautifully,
								highlighting the quality and craftsmanship that
								goes into our coffee. The images perfectly
								convey the essence of our brand and have
								significantly improved our marketing materials.
								We've seen increased engagement across our
								platforms since implementing these new
								photographs."
							</motion.blockquote>
							<motion.p
								className='text-right text-sm text-muted-foreground mt-2'
								initial={{ opacity: 0 }}
								animate={isLoaded ? { opacity: 1 } : {}}
								transition={{ duration: 0.6, delay: 1.5 }}
							>
								— Marketing Director, Ravens Brew Coffee
							</motion.p>
						</motion.section>
					</div>
				</div>
			</div>

			{/* Mobile Footer */}
			<motion.div
				className='md:hidden p-8 mt-4'
				initial={{ opacity: 0 }}
				animate={isLoaded ? { opacity: 1 } : {}}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				<div className='flex justify-center space-x-6 mb-4'>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<rect
								width='20'
								height='20'
								x='2'
								y='2'
								rx='5'
								ry='5'
							/>
							<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
							<line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
						</svg>
					</a>
					<a
						href='https://linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
							<rect width='4' height='12' x='2' y='9' />
							<circle cx='4' cy='4' r='2' />
						</svg>
					</a>
					<a
						href='https://behance.net'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M1 12h6v4H1z' />
							<path d='M8 8h6v8H8z' />
							<path d='M15 4h6v12h-6z' />
						</svg>
					</a>
				</div>
				<p className='text-xs text-muted-foreground text-center'>
					© {new Date().getFullYear()} Nicholas Gould
				</p>
			</motion.div>
		</div>
	);
}
