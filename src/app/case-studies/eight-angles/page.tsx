'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function EightAnglesCaseStudy() {
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
						Eight Angles Collection
					</motion.h1>

					<motion.div
						className='aspect-[16/9] relative mb-8'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<Image
							src='/images/optimized_images/product_eight_angles_vase.jpg'
							alt='Eight Angles Collection'
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
								Eight Angles, a premium home decor brand,
								commissioned a product photography series for
								their new collection of minimalist ceramic vases
								and decorative objects. The goal was to create
								clean, elegant imagery that highlighted the
								unique geometric forms and subtle textures of
								their handcrafted pieces.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								The photography needed to align with their brand
								aesthetic of understated luxury while showcasing
								the versatility of their products in
								contemporary home settings.
							</p>
						</div>
						<div>
							<h2 className='text-xl font-light mb-4'>
								The Approach
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								I developed a minimalist studio setup with
								carefully controlled lighting to accentuate the
								clean lines and subtle details of each piece.
								The photography style emphasized negative space,
								creating a sense of calm sophistication that
								aligned with the brand&apos;s identity.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								For context shots, I created simple vignettes
								that suggested how the pieces might be displayed
								in a home, using neutral backgrounds and
								complementary props that wouldn&apos;t distract
								from the featured products.
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
								src='/images/optimized_images/product_eight_angles_vase.jpg'
								alt='Eight Angles Vase'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/product_eight_angles_bowl.jpg'
								alt='Eight Angles Bowl'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/product_eight_angles_set.jpg'
								alt='Eight Angles Set'
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
									• Capturing the subtle textures and finishes
									of ceramic surfaces
								</li>
								<li>
									• Creating consistent lighting across
									various product shapes and sizes
								</li>
								<li>
									• Balancing minimalist aesthetics with
									product detail visibility
								</li>
								<li>
									• Developing a cohesive visual language
									across the entire collection
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
