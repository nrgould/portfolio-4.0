import React from 'react'
import * as motion from 'motion/react-client';

function Testimonials() {
  return (
    <section className='w-[90%] md:w-[80%] mx-auto py-16 mb-16 bg-muted/30'>
					<motion.h2
						className='text-2xl font-light text-center mb-12'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Client Testimonials
					</motion.h2>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8'>
						<motion.div
							className='bg-background p-6 shadow-sm'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className='mb-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-muted-foreground/50'
								>
									<path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'></path>
									<path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'></path>
								</svg>
							</div>
							<p className='text-foreground/80 mb-6 italic'>
								Nicholas has an incredible eye for detail. His
								product photography for our brand elevated our
								entire marketing campaign and directly
								contributed to increased sales.
							</p>
							<div className='flex items-center'>
								<div className='ml-2'>
									<p className='font-medium text-sm'>
										Sarah Johnson
									</p>
									<p className='text-xs text-muted-foreground'>
										Marketing Director, Eight Angles
									</p>
								</div>
							</div>
						</motion.div>

						{/* Testimonial 2 */}
						<motion.div
							className='bg-background p-6 shadow-sm'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className='mb-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-muted-foreground/50'
								>
									<path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'></path>
									<path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'></path>
								</svg>
							</div>
							<p className='text-foreground/80 mb-6 italic'>
								Working with Nicholas was a game-changer for our
								outdoor apparel line. He captured the essence of
								our brand in challenging environments while
								maintaining exceptional quality.
							</p>
							<div className='flex items-center'>
								<div className='ml-2'>
									<p className='font-medium text-sm'>
										Michael Torres
									</p>
									<p className='text-xs text-muted-foreground'>
										Product Manager, Smartwool
									</p>
								</div>
							</div>
						</motion.div>

						{/* Testimonial 3 */}
						<motion.div
							className='bg-background p-6 shadow-sm'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<div className='mb-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-muted-foreground/50'
								>
									<path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'></path>
									<path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'></path>
								</svg>
							</div>
							<p className='text-foreground/80 mb-6 italic'>
								Nicholas&apos;s photography tells a story. For
								our coffee brand, he created images that convey
								the rich experience of our product in a way that
								resonates with our customers.
							</p>
							<div className='flex items-center'>
								<div className='ml-2'>
									<p className='font-medium text-sm'>
										Emily Chen
									</p>
									<p className='text-xs text-muted-foreground'>
										Creative Director, Ravens Brew
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</section>
  )
}

export default Testimonials;