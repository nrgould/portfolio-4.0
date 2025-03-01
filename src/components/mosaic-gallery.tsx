import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

// Gallery items data
const galleryItems = [
	{
		id: 1,
		title: 'Smartwool Jacket',
		href: '/photography?category=lifestyle',
		image: '/images/optimized_images/lifestyle_smartwool_jacket.jpg',
	},
	{
		id: 2,
		title: 'Eight Angles Collection',
		href: '/case-studies/eight-angles',
		image: '/images/optimized_images/product_lifestyle_eight_angles1.jpg',
	},
	{
		id: 3,
		title: 'Ravens Brew Coffee',
		href: '/case-studies/ravens-brew',
		image: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
	},
	{
		id: 4,
		title: 'Smartwool Hiking',
		href: '/photography?category=lifestyle',
		image: '/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg',
	},
	{
		id: 5,
		title: 'Product Detail',
		href: '/photography?category=product',
		image: '/images/R6II6459-Edit.jpg',
	},
	{
		id: 6,
		title: 'Studio Photography',
		href: '/photography?category=product',
		image: '/images/R6II6399-Edit.jpg',
	},
	{
		id: 7,
		title: 'Smartwool Socks',
		href: '/case-studies/smartwool',
		image: '/images/optimized_images/lifestyle_holding_smartwool_socks.jpg',
	},
	{
		id: 8,
		title: 'Eight Angles Detail',
		href: '/case-studies/eight-angles',
		image: '/images/optimized_images/product_lifestyle_eight_angles3.jpg',
	},
	{
		id: 9,
		title: 'Ravens Brew Coffee Beans',
		href: '/case-studies/ravens-brew',
		image: '/images/optimized_images/1_product_lifestyle_ravens_brew_deadmans_reach_on_stump.jpg',
	},
];

export function MosaicGallery() {
	return (
		<motion.div
			className='w-[90%] md:w-[80%] mx-auto p-2 md:p-4 gallery-container py-24'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<div className='columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4'>
				{galleryItems.map((item, index) => (
					<motion.div
						key={item.id}
						className='break-inside-avoid mb-4 overflow-hidden'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: index * 0.07,
						}}
					>
						<Link href={item.href} className='block w-full'>
							<div className='relative overflow-hidden'>
								<div className='w-full relative'>
									<Image
										src={item.image}
										alt={item.title}
										width={800}
										height={600}
										className='w-full h-auto object-cover transition-transform duration-700 hover:scale-105'
										priority={index < 4}
										sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
									/>
									<motion.div
										className='absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/20'
										whileHover={{
											backgroundColor:
												'rgba(0, 0, 0, 0.2)',
										}}
									/>
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
