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
				"Product and lifestyle photography for Eight Angles' premium jewelry collection, highlighting their minimalist bracelet designs and handcrafted details.",
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
		<div className='flex flex-col min-h-screen'>
			{/* Main Content */}
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32'>
				<div className='max-w-4xl mx-auto'>
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
								className='grid md:grid-cols-2 gap-8 items-center'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.7,
									ease: [0.22, 1, 0.36, 1],
									delay: index * 0.15,
								}}
							>
								<div className='space-y-4 flex flex-col justify-center'>
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
										<div className='relative overflow-hidden aspect-square'>
											<Image
												src={study.image}
												alt={`${study.title} Case Study`}
												fill
												className='object-cover transition-transform duration-700 hover:scale-105'
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
