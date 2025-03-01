import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function CaseStudies() {
	const caseStudies = [
		{
			id: 1,
			title: 'Smartwool',
			description:
				"Lifestyle and product photography for Smartwool's Fall/Winter collection, showcasing their performance apparel in outdoor settings.",
			href: '/case-studies/smartwool',
			image: '/images/optimized_images/lifestyle_smartwool_jacket.jpg',
		},
		{
			id: 2,
			title: 'Eight Angles',
			description:
				"Product and lifestyle photography for Eight Angles' sustainable clothing line, highlighting their minimalist aesthetic and eco-friendly materials.",
			href: '/case-studies/eight-angles',
			image: '/images/optimized_images/product_lifestyle_eight_angles1.jpg',
		},
		{
			id: 3,
			title: 'Ravens Brew Coffee',
			description:
				"Product photography for Ravens Brew Coffee's packaging and marketing materials, capturing the rich colors and textures of their specialty coffee products.",
			href: '/case-studies/ravens-brew',
			image: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
		},
	];

	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8 mt-36'>
				<div className='max-w-full md:max-w-2/3 lg:max-w-1/2 mx-auto'>
					<motion.h1
						className='text-2xl mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Case Studies
					</motion.h1>

					<motion.div
						className='space-y-16'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						{caseStudies.map((study, index) => (
							<motion.div
								key={study.id}
								className='grid md:grid-cols-2 gap-8'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.7,
									ease: [0.22, 1, 0.36, 1],
									delay: index * 0.15,
								}}
							>
								<div className='space-y-4'>
									<h2 className='text-xl'>{study.title}</h2>
									<p className='text-muted-foreground'>
										{study.description}
									</p>
									<div>
										<Link
											href={study.href}
											className='inline-block mt-2 text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors'
										>
											View Case Study
										</Link>
									</div>
								</div>
								<div className='relative overflow-hidden'>
									<Link href={study.href}>
										<div className='relative overflow-hidden'>
											<Image
												src={study.image}
												alt={`${study.title} Case Study`}
												width={800}
												height={600}
												className='w-full h-auto object-cover transition-transform duration-700 hover:scale-105'
												sizes='(max-width: 768px) 100vw, 50vw'
												priority={study.id === 1}
											/>
											<motion.div
												className='absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/20'
												whileHover={{
													backgroundColor:
														'rgba(0, 0, 0, 0.2)',
												}}
											/>
										</div>
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
