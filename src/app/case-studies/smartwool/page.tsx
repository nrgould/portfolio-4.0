'use client';

import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';

export default function SmartWoolCaseStudy() {
	return (
		<div className='flex-1'>
			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8'>
				<div className='max-w-full md:max-w-2/3 lg:max-w-1/2 mx-auto'>
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
						className='text-3xl font-light mb-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Smartwool Campaign
					</motion.h1>

					<motion.div
						className='aspect-[16/9] relative mb-8'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<Image
							src='/images/optimized_images/lifestyle_smartwool_jacket.jpg'
							alt='Smartwool Campaign'
							fill
							className='object-cover'
						/>
					</motion.div>

					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Project Overview
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								Smartwool approached me to create a series of
								product and lifestyle images for their new line
								of outdoor apparel and accessories. The goal was
								to showcase their products in authentic outdoor
								settings while highlighting the technical
								features and comfort of their merino wool
								products.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								The campaign included studio product photography
								as well as on-location lifestyle shoots in
								various outdoor environments, from mountain
								trails to urban settings.
							</p>
						</div>
						<div>
							<h2 className='text-xl font-light mb-4'>
								The Approach
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								For this project, I focused on creating a
								cohesive visual narrative that emphasized both
								the technical performance and everyday comfort
								of Smartwool products. The photography style
								balanced clean, detailed product shots with
								authentic lifestyle imagery showing the products
								in use.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								Working closely with the Smartwool team, we
								developed a shot list that covered their key
								product categories while maintaining a
								consistent visual language throughout the
								campaign.
							</p>
						</div>
					</motion.div>

					<motion.h2
						className='text-xl font-light mb-6 text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						The Results
					</motion.h2>
					<motion.div
						className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/lifestyle_smartwool_jacket.jpg'
								alt='Smartwool Jacket'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg'
								alt='Hiking with Smartwool Socks'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/lifestyle_holding_smartwool_socks.jpg'
								alt='Smartwool Socks'
								fill
								className='object-cover'
							/>
						</div>
					</motion.div>

					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.7 }}
					>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Key Challenges
							</h2>
							<ul className='text-muted-foreground font-light space-y-2'>
								<li>
									• Capturing the texture and quality of
									merino wool products
								</li>
								<li>
									• Creating authentic outdoor scenes in
									varying weather conditions
								</li>
								<li>
									• Balancing technical product details with
									lifestyle imagery
								</li>
								<li>
									• Maintaining consistent brand aesthetics
									across diverse environments
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className='text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						<Link
							href='/case-studies'
							className='inline-block px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
						>
							View More Case Studies
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
