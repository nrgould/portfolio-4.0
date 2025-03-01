'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as motion from 'motion/react-client';
import { Sidebar } from '@/components/layout/sidebar';

// Define the photo type
interface Photo {
	src: string;
	alt: string;
}

// Photo data
const allPhotos: Photo[] = [
	// Add your photo data here
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles1.jpg',
		alt: 'Eight Angles Collection',
	},
	{
		src: '/images/optimized_images/lifestyle_smartwool_jacket.jpg',
		alt: 'Smartwool Jacket',
	},
	{
		src: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
		alt: 'Ravens Brew Coffee',
	},
	{
		src: '/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg',
		alt: 'Smartwool Hiking',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles2.jpg',
		alt: 'Eight Angles Lifestyle',
	},
	{ src: '/images/R6II6459-Edit.jpg', alt: 'Product Detail' },
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles3.jpg',
		alt: 'Eight Angles Detail',
	},
	{ src: '/images/R6II6399-Edit.jpg', alt: 'Studio Photography' },
	{
		src: '/images/optimized_images/lifestyle_holding_smartwool_socks.jpg',
		alt: 'Smartwool Socks',
	},
	// Add more photos as needed
];

const productPhotos: Photo[] = [
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles1.jpg',
		alt: 'Eight Angles Collection',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles3.jpg',
		alt: 'Eight Angles Detail',
	},
	{ src: '/images/R6II6459-Edit.jpg', alt: 'Product Detail' },
	{ src: '/images/R6II6399-Edit.jpg', alt: 'Studio Photography' },
	{
		src: '/images/optimized_images/product_majiang_furniture_set_above.jpg',
		alt: 'Majiang Furniture Set',
	},
	{
		src: '/images/optimized_images/lifestyle_product_majiang_chair.jpg',
		alt: 'Majiang Chair Design',
	},
];

const lifestylePhotos: Photo[] = [
	{
		src: '/images/optimized_images/lifestyle_smartwool_jacket.jpg',
		alt: 'Smartwool Jacket',
	},
	{
		src: '/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg',
		alt: 'Smartwool Hiking',
	},
	{
		src: '/images/optimized_images/lifestyle_holding_smartwool_socks.jpg',
		alt: 'Smartwool Socks',
	},
	{
		src: '/images/optimized_images/lifestyle_product_majiang_furniture_set.jpg',
		alt: 'Majiang Furniture Arrangement',
	},
	{
		src: '/images/optimized_images/4_lifestyle_product_aileen_wearing_helly_hansen_jacket_lofoten_islands_norway.jpg',
		alt: 'Helly Hansen Jacket',
	},
	{
		src: '/images/optimized_images/lifestyle_fjallraven_raven_28_during_rainy_hike.jpg',
		alt: 'Fjallraven Backpack Hiking',
	},
];

const brandPhotos: Photo[] = [
	{
		src: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
		alt: 'Ravens Brew Coffee',
	},
	{
		src: '/images/optimized_images/2_product_lifestyle_ravens_brew_ferns.jpg',
		alt: 'Ravens Brew Coffee Among Ferns',
	},
	{
		src: '/images/optimized_images/product_lifestyle_ravens_brew_indoors.jpg',
		alt: 'Ravens Brew Coffee Indoors',
	},
	{
		src: '/images/optimized_images/1_product_lifestyle_ravens_brew_deadmans_reach_on_stump.jpg',
		alt: 'Ravens Brew Deadmans Reach',
	},
	{
		src: '/images/optimized_images/lifestyle_smartwool_jacket.jpg',
		alt: 'Smartwool Jacket',
	},
	{
		src: '/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg',
		alt: 'Smartwool Hiking',
	},
];

// Gallery component for reuse across tabs
function PhotoGallery({ photos }: { photos: Photo[] }) {
	return (
		<motion.div
			className='w-full mx-auto'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<div className='columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4'>
				{photos.map((photo: Photo, index: number) => (
					<motion.div
						key={`${photo.alt}-${index}`}
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
						<div className='relative overflow-hidden'>
							<div className='w-full relative'>
								<Image
									src={photo.src}
									alt={photo.alt}
									width={800}
									height={600}
									className='w-full h-auto object-cover transition-transform duration-700 hover:scale-105'
									priority={index < 4}
									sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
								/>
								<motion.div
									className='absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/20'
									whileHover={{
										backgroundColor: 'rgba(0, 0, 0, 0.2)',
									}}
								/>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

export default function Photography() {
	const [selectedTab, setSelectedTab] = useState('all');

	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Sidebar Navigation */}
			<Sidebar currentPath='/photography' />

			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8'>
				<motion.h1
					className='text-2xl mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Photography
				</motion.h1>

				<Tabs
					defaultValue='all'
					value={selectedTab}
					onValueChange={setSelectedTab}
					className='w-full'
				>
					<TabsList className='mb-8'>
						<TabsTrigger value='all'>All</TabsTrigger>
						<TabsTrigger value='product'>Product</TabsTrigger>
						<TabsTrigger value='lifestyle'>Lifestyle</TabsTrigger>
						<TabsTrigger value='brand'>Brand</TabsTrigger>
					</TabsList>

					<TabsContent value='all' className='mt-0'>
						<PhotoGallery photos={allPhotos} />
					</TabsContent>

					<TabsContent value='product' className='mt-0'>
						<PhotoGallery photos={productPhotos} />
					</TabsContent>

					<TabsContent value='lifestyle' className='mt-0'>
						<PhotoGallery photos={lifestylePhotos} />
					</TabsContent>

					<TabsContent value='brand' className='mt-0'>
						<PhotoGallery photos={brandPhotos} />
					</TabsContent>
				</Tabs>
			</div>

			{/* Mobile Footer */}
			<motion.div
				className='md:hidden p-8 mt-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				<div className='flex justify-center space-x-6 mb-4'>
					<a
						href='https://instagram.com/nicholasgould1'
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
						href='https://www.linkedin.com/in/nicholasgouldfpv/'
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
						href='https://www.behance.net/nrgould197'
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
							<path d='M3 9h6c1 0 2 1 2 2s-1 2-2 2H3z' />
							<path d='M3 13h6c1 0 2 1 2 2s-1 2-2 2H3z' />
							<path d='M14 7h7' />
							<path d='M14 11h4c1 0 2-1 2-2s-1-2-2-2h-4z' />
							<path d='M14 15h4c1 0 2-1 2-2s-1-2-2-2h-4z' />
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
