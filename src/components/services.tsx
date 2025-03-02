import { ArrowRight, Box, CircleUserRound, Sun } from 'lucide-react';
import * as motion from 'motion/react-client';
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
function Services() {
	return (
		<section className='w-[90%] md:w-[80%] mx-auto py-16 mb-16'>
			<motion.h2
				className='text-2xl font-light text-center mb-12'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				Photography Services
			</motion.h2>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* Service 1: Product Photography */}
				<motion.div
					className='text-center flex flex-col items-center justify-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<Box className='text-foreground w-12 h-12 mb-4' />
					<h3 className='text-xl font-light mb-3'>
						Product Photography
					</h3>
					<p className='text-muted-foreground max-w-sm'>
						Showcase your products with clean, detailed imagery that
						highlights features and quality. Studio and
						environmental setups available.
					</p>
				</motion.div>

				{/* Service 2: Lifestyle Photography */}
				<motion.div
					className='text-center flex flex-col items-center justify-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Sun className='text-foreground w-12 h-12 mb-4' />
					<h3 className='text-xl font-light mb-3'>
						Lifestyle Photography
					</h3>
					<p className='text-muted-foreground max-w-sm'>
						Capture your products in authentic, real-world scenarios
						that tell a story and connect with your audience.
					</p>
				</motion.div>

				{/* Service 3: Brand Photography */}
				<motion.div
					className='text-center flex flex-col items-center justify-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<CircleUserRound className='text-foreground w-12 h-12 mb-4' />
					<h3 className='text-xl font-light mb-3'>
						Portrait Photography
					</h3>
					<p className='text-muted-foreground max-w-sm'>
						Highlight individuality and emotion with striking,
						authentic portraits that capture personality and
						presence in every frame
					</p>
				</motion.div>
			</div>

			<motion.div
				className='text-center mt-12'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<Button variant='outline' asChild>
					<Link
						href='/contact'
						className='inline-flex items-center text-foreground hover:text-foreground/80 transition-colors'
					>
						<span>Discuss your project</span>
						<ArrowRight className='w-4 h-4 ml-2' />
					</Link>
				</Button>
			</motion.div>
		</section>
	);
}

export default Services;
