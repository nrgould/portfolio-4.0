import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import { MosaicGallery } from '@/components/mosaic-gallery';
import { Button } from '@/components/ui/button';
import Services from '@/components/services';

// Server Component for SEO benefits
export default function Home() {
	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72'>
				{/* Hero Section */}
				<section className='relative w-full h-[70vh] mb-12'>
					<div className='absolute inset-0'>
						<Image
							src='/images/leaves.jpg'
							alt='Artistic photograph of leaves'
							fill
							priority
							className='object-cover'
							sizes='100vw'
						/>
						<div className='absolute inset-0 bg-black/30' />
					</div>
					<div className='relative h-full flex flex-col justify-center items-center text-center px-4 z-10'>
						<motion.h1
							className='text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.3 }}
						>
							Nicholas Gould
						</motion.h1>
						<motion.p
							className='text-xl md:text-2xl text-white/90 max-w-2xl'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
						>
							Commercial Photographer Specializing in Product &
							Lifestyle Photography
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.7 }}
							className='mt-8'
						>
							<Button variant='outline' asChild>
								<Link href='/contact'>Get in Touch</Link>
							</Button>
						</motion.div>

						{/* Featured In Section */}
						<motion.div
							className='mt-12 w-full max-w-md'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.7, delay: 0.9 }}
						>
							<p className='text-white/70 text-sm mb-4 uppercase tracking-wider'>
								Featured In
							</p>
							<div className='flex justify-center items-center space-x-8'>
								<div className='h-10 flex items-center'>
									<Image
										src='/images/logos/BACLogo.jpg'
										alt='BAC'
										width={80}
										height={40}
										className='object-contain h-full w-auto brightness-200 contrast-125'
									/>
								</div>
								<div className='h-10 flex items-center'>
									<Image
										src='/images/logos/thepaper.png'
										alt='The Paper'
										width={80}
										height={40}
										className='object-contain h-full w-auto brightness-200 contrast-125'
									/>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Featured Brands Section */}
				<section className='w-[90%] md:w-[80%] mx-auto mb-16'>
					<motion.h2
						className='text-2xl font-light text-center mb-12'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Trusted by Leading Brands
					</motion.h2>

					<motion.div
						className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						{/* Eight Angles */}
						<div className='h-16 flex items-center'>
							<Image
								src='/images/logos/eightangles.png'
								alt='Eight Angles'
								width={120}
								height={60}
								className='object-contain h-full w-auto filter grayscale hover:grayscale-0 transition-all duration-300'
							/>
						</div>

						{/* Smartwool */}
						<div className='h-16 flex items-center'>
							<Image
								src='/images/logos/smartwool.png'
								alt='Smartwool'
								width={120}
								height={60}
								className='object-contain h-full w-auto filter grayscale hover:grayscale-0 transition-all duration-300'
							/>
						</div>

						{/* Ravens Brew */}
						<div className='h-16 flex items-center'>
							<Image
								src='/images/logos/ravensbrew.png'
								alt='Ravens Brew Coffee'
								width={120}
								height={60}
								className='object-contain h-full w-auto filter grayscale hover:grayscale-0 transition-all duration-300'
							/>
						</div>

						{/* C2Life */}
						<div className='h-16 flex items-center'>
							<Image
								src='/images/logos/c2life.png'
								alt='C2Life'
								width={120}
								height={60}
								className='object-contain h-full w-auto filter grayscale hover:grayscale-0 transition-all duration-300'
							/>
						</div>
					</motion.div>
				</section>

				{/* Portfolio Gallery */}
				<section>
					<motion.h2
						className='text-2xl font-light text-center mb-8'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Featured Work
					</motion.h2>
					<MosaicGallery />
				</section>

				<Services />
			</div>
		</div>
	);
}
