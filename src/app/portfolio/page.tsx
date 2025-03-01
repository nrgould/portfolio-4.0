'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shell } from '@/components/layout/shell';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'motion/react';

// Categories for filtering
const categories = [
	{ id: 'all', name: 'All Work' },
	{ id: 'product', name: 'Product' },
	{ id: 'lifestyle', name: 'Lifestyle' },
	{ id: 'eightangles', name: 'Eight Angles' },
	{ id: 'smartwool', name: 'Smartwool' },
	{ id: 'portrait', name: 'Portrait' },
	{ id: 'landscape', name: 'Landscape' },
];

// Portfolio items with category tags
const portfolioItems = [
	// Eight Angles - Featured prominently at the top
	{
		id: 'eight-angles-1',
		title: 'Eight Angles Collection',
		categories: ['product', 'lifestyle', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles1.jpg',
	},
	{
		id: 'eight-angles-2',
		title: 'Eight Angles Lifestyle',
		categories: ['product', 'lifestyle', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles2.jpg',
	},
	{
		id: 'eight-angles-3',
		title: 'Eight Angles Detail',
		categories: ['product', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles3.jpg',
	},
	{
		id: 'eight-angles-4',
		title: 'Eight Angles Product',
		categories: ['product', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles4.jpg',
	},
	{
		id: 'eight-angles-5',
		title: 'Eight Angles Showcase',
		categories: ['product', 'lifestyle', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles5.jpg',
	},
	{
		id: 'eight-angles-6',
		title: 'Eight Angles Environment',
		categories: ['product', 'lifestyle', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles6.jpg',
	},
	{
		id: 'eight-angles-7',
		title: 'Eight Angles Composition',
		categories: ['product', 'lifestyle', 'eightangles'],
		image: '/images/optimized_images/product_lifestyle_eight_angles7.jpg',
	},

	// Smartwool - Featured prominently
	{
		id: 'smartwool-1',
		title: 'Smartwool Jacket',
		categories: ['product', 'lifestyle', 'smartwool'],
		image: '/images/optimized_images/lifestyle_smartwool_jacket.jpg',
	},
	{
		id: 'smartwool-2',
		title: 'Smartwool Hiking',
		categories: ['product', 'lifestyle', 'smartwool'],
		image: '/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg',
	},
	{
		id: 'smartwool-3',
		title: 'Smartwool Socks',
		categories: ['product', 'lifestyle', 'smartwool'],
		image: '/images/optimized_images/lifestyle_holding_smartwool_socks.jpg',
	},

	// Ravens Brew Coffee
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
		id: 'ravens-brew-5',
		title: 'Ravens Brew Coffee Cup',
		categories: ['product', 'lifestyle'],
		image: '/images/optimized_images/lifestyle_product_ravens_brew_deadmans_reach_coffee.jpg',
	},

	// Studio Product Photography
	{
		id: 'new-image-1',
		title: 'Product Detail',
		categories: ['product'],
		image: '/images/R6II6459-Edit.jpg',
	},
	{
		id: 'new-image-2',
		title: 'Studio Photography',
		categories: ['product'],
		image: '/images/R6II6399-Edit.jpg',
	},
	{
		id: 'new-image-3',
		title: 'Environmental',
		categories: ['landscape'],
		image: '/images/R6II5990.jpg',
	},

	// Other Product/Lifestyle
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
		title: 'Winter Fashion in Sweden',
		categories: ['lifestyle'],
		image: '/images/optimized_images/lifestyle_product_roland_dressed_warmly_in_sweden.jpg',
	},
	{
		id: 'outdoor-apparel-4',
		title: 'Beach Hiking at Sunset',
		categories: ['lifestyle'],
		image: '/images/optimized_images/2_lifestyle_hiking_on_a_beach_sunset_fjallraven.jpg',
	},
	{
		id: 'fashion-1',
		title: 'Acne Studios Bag',
		categories: ['lifestyle'],
		image: '/images/optimized_images/7_lifestyle_aileen_holding_acne_studios_bag_stockholm.jpg',
	},
	{
		id: 'fashion-2',
		title: 'Satila Beanie in Lofoten',
		categories: ['lifestyle'],
		image: '/images/optimized_images/lifestyle_portrait_emily_wearing_satila_beanie_lofoten_islands_norway.jpg',
	},

	// Portraits - Expanded section
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
		title: 'Cherry Blossom Portrait 2',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_2.jpg',
	},
	{
		id: 'portrait-5',
		title: 'Fall Leaves Portrait',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_girl_posing_with_fall_leaves.jpg',
	},
	{
		id: 'portrait-6',
		title: 'Horse Portrait',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_horse_ab.jpg',
	},
	{
		id: 'portrait-7',
		title: 'Snow Sunset Portrait',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_lifestyle_aileen_in_snow_sunset_in_sweden.jpg',
	},
	{
		id: 'portrait-8',
		title: 'Copenhagen Sunset Portrait',
		categories: ['portrait'],
		image: '/images/optimized_images/portrait_lifestyle_emilie_copenhagen_sunset.jpg',
	},
	{
		id: 'portrait-9',
		title: 'Couple Dancing at Sunset',
		categories: ['portrait'],
		image: '/images/optimized_images/2_portrait_couple_dancing_at_sunset.jpg',
	},
	{
		id: 'portrait-10',
		title: 'Portrait in Black Dress',
		categories: ['portrait'],
		image: '/images/optimized_images/2_portrait_black_dress.jpg',
	},

	// Landscapes - Expanded section
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
		image: '/images/optimized_images/landscape_bavarian_alps_sunset.jpg',
	},
	{
		id: 'landscape-4',
		title: 'Dolomites Seceda',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_dolomites_seceda.jpg',
	},
	{
		id: 'landscape-5',
		title: 'Dolomites Sunset',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_dolomites_sunset.jpg',
	},
	{
		id: 'landscape-6',
		title: 'Heart Hut in Norway',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_heart_hut_in_norway.jpg',
	},
	{
		id: 'landscape-7',
		title: 'Dolomites Cadini di Misurina',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_dolomites_cadini_di_misurina.jpg',
	},
	{
		id: 'landscape-8',
		title: 'Hiking in the Dolomites',
		categories: ['landscape'],
		image: '/images/optimized_images/landscape_dolomites_man_hiking_with_mountain_background_dusk.jpg',
	},
	{
		id: 'landscape-9',
		title: 'Bridge in Lofoten Islands',
		categories: ['landscape'],
		image: '/images/optimized_images/2_landscape_bridge_in_lofoten_islands.jpg',
	},
	{
		id: 'landscape-10',
		title: 'Lago di Braies',
		categories: ['landscape'],
		image: '/images/optimized_images/3_landscape_lago_di_braies.jpg',
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
			<div className='container py-24 mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='mb-16 text-center'>
					<h1 className='text-4xl font-light tracking-wide mb-4'>
						Portfolio
					</h1>
					<p className='text-muted-foreground font-light max-w-xl mx-auto'>
						A curated collection showcasing product and lifestyle
						photography
					</p>
				</div>

				{/* Category filters */}
				<div className='mb-16 flex flex-wrap items-center justify-center gap-3'>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-4 py-2 text-sm font-light transition-colors ${
								selectedCategory === category.id
									? 'text-foreground'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							{category.name}
						</button>
					))}
				</div>

				{/* Portfolio grid */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					{filteredItems.map((item) => (
						<motion.div
							key={item.id}
							id={item.id}
							className='group relative block'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<AspectRatio ratio={1} className='overflow-hidden'>
								<Image
									src={item.image}
									alt={item.title}
									fill
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
									className='object-cover transition-transform duration-500 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										{item.title}
									</span>
								</div>
							</AspectRatio>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Shell>
	);
}
