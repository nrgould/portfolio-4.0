'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shell } from '@/components/layout/shell';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

// Categories for filtering
const categories = [
	{ id: 'all', name: 'All Work' },
	{ id: 'product', name: 'Product' },
	{ id: 'lifestyle', name: 'Lifestyle' },
	{ id: 'portrait', name: 'Portrait' },
	{ id: 'landscape', name: 'Landscape' },
];

// Portfolio items with category tags
const portfolioItems = [
	{
		id: 'ravens-brew-1',
		title: 'Ravens Brew Coffee',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
	},
	{
		id: 'ravens-brew-2',
		title: 'Ravens Brew Coffee Among Ferns',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/2_product_lifestyle_ravens_brew_ferns.jpg',
	},
	{
		id: 'ravens-brew-3',
		title: 'Ravens Brew Coffee Indoors',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/product_lifestyle_ravens_brew_indoors.jpg',
	},
	{
		id: 'ravens-brew-4',
		title: 'Ravens Brew Deadmans Reach',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/1_product_lifestyle_ravens_brew_deadmans_reach_on_stump.jpg',
	},
	{
		id: 'majiang-furniture-1',
		title: 'Majiang Furniture Set',
		categories: ['product'],
		image: '/images/optimized_images/product_majiang_furniture_set_above.jpg',
	},
	{
		id: 'majiang-furniture-2',
		title: 'Majiang Furniture Arrangement',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/lifestyle_product_majiang_furniture_set.jpg',
	},
	{
		id: 'majiang-chair',
		title: 'Majiang Chair Design',
		categories: ['product'],
		image: '/images/optimized_images/lifestyle_product_majiang_chair.jpg',
	},
	{
		id: 'outdoor-apparel-1',
		title: 'Helly Hansen Jacket',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/4_lifestyle_product_aileen_wearing_helly_hansen_jacket_lofoten_islands_norway.jpg',
	},
	{
		id: 'outdoor-apparel-2',
		title: 'Fjallraven Backpack Hiking',
		categories: ['lifestyle'],
		image: '/images/optimized_images/lifestyle_fjallraven_raven_28_during_rainy_hike.jpg',
	},
	{
		id: 'outdoor-apparel-3',
		title: 'Beanie in Lofoten Islands',
		categories: ['lifestyle', 'portrait'],
		image: '/images/optimized_images/lifestyle_portrait_emily_wearing_satila_beanie_lofoten_islands_norway.jpg',
	},
	{
		id: 'portrait-1',
		title: 'Portrait at Sunset',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_thomas_stockholm_street_sunset.jpg',
	},
	{
		id: 'portrait-2',
		title: 'Cherry Blossom Portrait',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_1.jpg',
	},
	{
		id: 'portrait-3',
		title: 'Couple at Sunset',
		categories: ['portrait'],
		image: '/images/optimized_images/1_portrait_couple_looking_at_eachother_sunset.jpg',
	},
	{
		id: 'portrait-4',
		title: 'Couple Dancing',
		categories: ['portrait'],
		image: '/images/optimized_images/2_portrait_couple_dancing_at_sunset.jpg',
	},
	{
		id: 'landscape-1',
		title: 'Dolomites Santa Magdalena',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_dolomites_santa_magdalena.jpg',
	},
	{
		id: 'landscape-2',
		title: 'Lofoten Islands Church',
		categories: ['landscape'],
		image: '/images/optimized_images/1_landscape_snowy_church_lofoten_islands_norway.jpg',
	},
	{
		id: 'landscape-3',
		title: 'Bavarian Alps Sunset',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_bavarian_alps_sunset_in_grainau.jpg',
	},
	{
		id: 'landscape-4',
		title: 'Dolomites Sunset',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_dolomites_sunset.jpg',
	},
];

export default function Portfolio() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	// Filter portfolio items based on selected category
	const filteredItems =
		selectedCategory === 'all'
			? portfolioItems
			: portfolioItems.filter((item) =>
					item.categories.includes(selectedCategory)
			  );

	return (
		<Shell>
			<div className='container py-16 md:py-24'>
				<div className='mb-12 text-center'>
					<h1 className='mb-3 text-4xl font-bold md:text-5xl'>
						Portfolio
					</h1>
					<p className='mx-auto max-w-[700px] text-muted-foreground'>
						A curated collection of my best work showcasing product
						and lifestyle photography.
					</p>
				</div>

				{/* Category filters */}
				<div className='mb-12 flex flex-wrap items-center justify-center gap-2'>
					{categories.map((category) => (
						<Button
							key={category.id}
							variant={
								selectedCategory === category.id
									? 'default'
									: 'outline'
							}
							size='sm'
							onClick={() => setSelectedCategory(category.id)}
							className='rounded-full'
						>
							{category.name}
						</Button>
					))}
				</div>

				{/* Portfolio grid */}
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{filteredItems.map((item) => (
						<motion.div
							key={item.id}
							id={item.id}
							className='group overflow-hidden rounded-lg'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<AspectRatio
								ratio={4 / 5}
								className='overflow-hidden'
							>
								<Image
									src={item.image}
									alt={item.title}
									fill
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
									className='object-cover transition-transform duration-500 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
								<div className='absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<h3 className='text-lg font-medium'>
										{item.title}
									</h3>
									<div className='mt-2 flex flex-wrap gap-2'>
										{item.categories.map((cat) => (
											<span
												key={cat}
												className='inline-block rounded-full bg-white/20 px-2 py-1 text-xs'
											>
												{
													categories.find(
														(c) => c.id === cat
													)?.name
												}
											</span>
										))}
									</div>
								</div>
							</AspectRatio>
						</motion.div>
					))}
				</div>
			</div>
		</Shell>
	);
}
