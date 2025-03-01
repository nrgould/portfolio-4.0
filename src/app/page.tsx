import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import { MosaicGallery } from '@/components/mosaic-gallery';

// Server Component for SEO benefits
export default function Home() {
	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Main Content */}
			<motion.div
				className='flex-1 md:ml-64 lg:ml-72'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
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
							<Link
								href='/contact'
								className='px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors'
							>
								Get in Touch
							</Link>
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

				{/* Testimonials Section */}

				{/* Services Section */}
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
							className='text-center'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className='mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-muted/30'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-foreground'
								>
									<path d='m7.5 4.27 9 5.15' />
									<path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
									<path d='m3.3 7 8.7 5 8.7-5' />
									<path d='M12 22V12' />
								</svg>
							</div>
							<h3 className='text-xl font-light mb-3'>
								Product Photography
							</h3>
							<p className='text-muted-foreground'>
								Showcase your products with clean, detailed
								imagery that highlights features and quality.
								Studio and environmental setups available.
							</p>
						</motion.div>

						{/* Service 2: Lifestyle Photography */}
						<motion.div
							className='text-center'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className='mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-muted/30'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-foreground'
								>
									<path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' />
								</svg>
							</div>
							<h3 className='text-xl font-light mb-3'>
								Lifestyle Photography
							</h3>
							<p className='text-muted-foreground'>
								Capture your products in authentic, real-world
								scenarios that tell a story and connect with
								your audience.
							</p>
						</motion.div>

						{/* Service 3: Brand Photography */}
						<motion.div
							className='text-center'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<div className='mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-muted/30'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-foreground'
								>
									<circle cx='12' cy='12' r='10' />
									<path d='m16 8-8 8' />
									<path d='m8 8 8 8' />
								</svg>
							</div>
							<h3 className='text-xl font-light mb-3'>
								Brand Photography
							</h3>
							<p className='text-muted-foreground'>
								Develop a cohesive visual identity with
								photography that aligns with your brand values
								and resonates with your target market.
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
						<Link
							href='/contact'
							className='inline-flex items-center text-foreground hover:text-foreground/80 transition-colors'
						>
							<span>Discuss your project</span>
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
								className='ml-2'
							>
								<path d='M5 12h14' />
								<path d='m12 5 7 7-7 7' />
							</svg>
						</Link>
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
			</motion.div>
		</div>
	);
}
