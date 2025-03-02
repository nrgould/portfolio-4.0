'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as motion from 'motion/react-client';

// Define the photo type
interface Photo {
	src: string;
	alt: string;
}

// Photo data
const allPhotos: Photo[] = [
	// Product & Lifestyle
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

	// Portraits
	{
		src: '/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_1.jpg',
		alt: 'Cherry Blossom Portrait',
	},
	{
		src: '/images/optimized_images/1_portrait_couple_looking_at_eachother_sunset.jpg',
		alt: 'Couple at Sunset',
	},

	// Landscapes
	{
		src: '/images/optimized_images/landscape_dolomites_santa_magdalena.jpg',
		alt: 'Dolomites Santa Magdalena',
	},
	{
		src: '/images/optimized_images/1_landscape_snowy_church_lofoten_islands_norway.jpg',
		alt: 'Lofoten Islands Church',
	},
	{
		src: '/images/new_images/landscape_vienna_schonnbrunn.jpg',
		alt: 'Vienna Schönbrunn Palace',
	},
	{
		src: '/images/new_images/landscape_vienna_botanical_garden.jpg',
		alt: 'Vienna Botanical Garden',
	},
	{
		src: '/images/new_images/landscape_vienna_dome.jpg',
		alt: 'Vienna Cathedral',
	},
	{
		src: '/images/new_images/landscape_roman_colosseum.jpg',
		alt: 'Roman Colosseum',
	},

	// Additional Product & Lifestyle
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles4.jpg',
		alt: 'Eight Angles Product',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles5.jpg',
		alt: 'Eight Angles Showcase',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles6.jpg',
		alt: 'Eight Angles Environment',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles7.jpg',
		alt: 'Eight Angles Composition',
	},
	{
		src: '/images/optimized_images/product_lifestyle_one_for_the_fishes1.jpg',
		alt: 'One For The Fishes Product',
	},
	{
		src: '/images/optimized_images/product_lifestyle_one_for_the_fishes2.jpg',
		alt: 'One For The Fishes Lifestyle',
	},

	// Additional Portraits
	{
		src: '/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_2.jpg',
		alt: 'Cherry Blossom Portrait 2',
	},
	{
		src: '/images/optimized_images/portrait_girl_posing_with_fall_leaves.jpg',
		alt: 'Fall Leaves Portrait',
	},
	{
		src: '/images/optimized_images/portrait_horse_ab.jpg',
		alt: 'Horse Portrait',
	},
	{
		src: '/images/optimized_images/portrait_lifestyle_aileen_in_snow_sunset_in_sweden.jpg',
		alt: 'Snow Sunset Portrait',
	},

	// Additional Landscapes
	{
		src: '/images/optimized_images/landscape_dolomites_seceda.jpg',
		alt: 'Dolomites Seceda',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_sunset.jpg',
		alt: 'Dolomites Sunset',
	},
	{
		src: '/images/optimized_images/landscape_heart_hut_in_norway.jpg',
		alt: 'Heart Hut in Norway',
	},
	{ src: '/images/R6II5990.jpg', alt: 'Environmental Landscape' },
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
	{
		src: '/images/optimized_images/product_majiang_furniture_set_above.jpg',
		alt: 'Majiang Furniture Set',
	},
	{
		src: '/images/optimized_images/lifestyle_product_majiang_chair.jpg',
		alt: 'Majiang Chair Design',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles4.jpg',
		alt: 'Eight Angles Product',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles5.jpg',
		alt: 'Eight Angles Showcase',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles6.jpg',
		alt: 'Eight Angles Environment',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles7.jpg',
		alt: 'Eight Angles Composition',
	},
	{
		src: '/images/optimized_images/product_lifestyle_one_for_the_fishes1.jpg',
		alt: 'One For The Fishes Product',
	},
	{
		src: '/images/optimized_images/product_lifestyle_one_for_the_fishes2.jpg',
		alt: 'One For The Fishes Lifestyle',
	},
	// Adding brand photos to product category
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
		src: '/images/optimized_images/lifestyle_product_ravens_brew_deadmans_reach_coffee.jpg',
		alt: 'Ravens Brew Deadmans Reach Coffee',
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
	{
		src: '/images/optimized_images/lifestyle_product_roland_dressed_warmly_in_sweden.jpg',
		alt: 'Winter Fashion in Sweden',
	},
	{
		src: '/images/optimized_images/lifestyle_product_food_from_copenhagen.jpg',
		alt: 'Food from Copenhagen',
	},
	{
		src: '/images/optimized_images/lifestyle_portrait_emily_wearing_satila_beanie_lofoten_islands_norway.jpg',
		alt: 'Satila Beanie in Lofoten Islands',
	},
	{
		src: '/images/optimized_images/7_lifestyle_aileen_holding_acne_studios_bag_stockholm.jpg',
		alt: 'Acne Studios Bag in Stockholm',
	},
	{
		src: '/images/optimized_images/2_lifestyle_hiking_on_a_beach_sunset_fjallraven.jpg',
		alt: 'Hiking on Beach at Sunset with Fjallraven',
	},
];

// New portrait photos array
const portraitPhotos: Photo[] = [
	{
		src: '/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_1.jpg',
		alt: 'Cherry Blossom Portrait',
	},
	{
		src: '/images/optimized_images/1_portrait_couple_looking_at_eachother_sunset.jpg',
		alt: 'Couple at Sunset',
	},
	{
		src: '/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_2.jpg',
		alt: 'Cherry Blossom Portrait 2',
	},
	{
		src: '/images/optimized_images/portrait_girl_posing_with_fall_leaves.jpg',
		alt: 'Fall Leaves Portrait',
	},
	{
		src: '/images/optimized_images/portrait_horse_ab.jpg',
		alt: 'Horse Portrait',
	},
	{
		src: '/images/optimized_images/portrait_lifestyle_aileen_in_snow_sunset_in_sweden.jpg',
		alt: 'Snow Sunset Portrait',
	},
	{
		src: '/images/optimized_images/portrait_lifestyle_emilie_copenhagen_sunset.jpg',
		alt: 'Copenhagen Sunset Portrait',
	},
	{
		src: '/images/optimized_images/portrait_lifestyle_erica_in_copenhagen.jpg',
		alt: 'Erica in Copenhagen',
	},
	{
		src: '/images/optimized_images/portrait_erica_sitting_copenhagen_canal.jpg',
		alt: 'Erica at Copenhagen Canal',
	},
	{
		src: '/images/optimized_images/portrait_couple.jpg',
		alt: 'Couple Portrait',
	},
	{
		src: '/images/optimized_images/portrait_concert.jpg',
		alt: 'Concert Portrait',
	},
	{
		src: '/images/optimized_images/portrait_aileen_spring_flowers_in_front_of_building_lund.jpg',
		alt: 'Spring Flowers Portrait in Lund',
	},
	{
		src: '/images/optimized_images/portrait_ncsu_grad_photo_1.jpg',
		alt: 'NCSU Graduation Portrait 1',
	},
	{
		src: '/images/optimized_images/portrait_ncsu_grad_photo_2.jpg',
		alt: 'NCSU Graduation Portrait 2',
	},
	{
		src: '/images/optimized_images/portrait_ncsu_grad_photo_3.jpg',
		alt: 'NCSU Graduation Portrait 3',
	},
	{
		src: '/images/optimized_images/portrait_ncsu_grad_photo_4.jpg',
		alt: 'NCSU Graduation Portrait 4',
	},
	{
		src: '/images/optimized_images/3_portrait_couple_holding_eachother_sunset.jpg',
		alt: 'Couple Holding Each Other at Sunset',
	},
	{
		src: '/images/optimized_images/2_portrait_couple_dancing_at_sunset.jpg',
		alt: 'Couple Dancing at Sunset',
	},
	{
		src: '/images/optimized_images/2_portrait_black_dress.jpg',
		alt: 'Portrait in Black Dress',
	},
];

// New landscape photos array
const landscapePhotos: Photo[] = [
	{
		src: '/images/optimized_images/landscape_dolomites_santa_magdalena.jpg',
		alt: 'Dolomites Santa Magdalena',
	},
	{
		src: '/images/optimized_images/1_landscape_snowy_church_lofoten_islands_norway.jpg',
		alt: 'Lofoten Islands Church',
	},
	{
		src: '/images/optimized_images/landscape_bavarian_alps_sunset.jpg',
		alt: 'Bavarian Alps Sunset',
	},
	{
		src: '/images/new_images/landscape_vienna_schonnbrunn.jpg',
		alt: 'Vienna Schönbrunn Palace',
	},
	{
		src: '/images/new_images/landscape_vienna_botanical_garden.jpg',
		alt: 'Vienna Botanical Garden',
	},
	{
		src: '/images/new_images/landscape_vienna_dome.jpg',
		alt: 'Vienna Cathedral',
	},
	{
		src: '/images/new_images/landscape_roman_colosseum.jpg',
		alt: 'Roman Colosseum',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_seceda.jpg',
		alt: 'Dolomites Seceda',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_sunset.jpg',
		alt: 'Dolomites Sunset',
	},
	{
		src: '/images/optimized_images/landscape_heart_hut_in_norway.jpg',
		alt: 'Heart Hut in Norway',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_cadini_di_misurina.jpg',
		alt: 'Dolomites Cadini di Misurina',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_man_hiking_with_mountain_background_dusk.jpg',
		alt: 'Hiking in the Dolomites at Dusk',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_seiser_alm_greens.jpg',
		alt: 'Dolomites Seiser Alm Greens',
	},
	{
		src: '/images/optimized_images/landscape_dolomites_seiser_alm_wildflowers.jpg',
		alt: 'Dolomites Seiser Alm Wildflowers',
	},
	{
		src: '/images/optimized_images/landscape_lake_james.jpg',
		alt: 'Lake James',
	},
	{
		src: '/images/optimized_images/landscape_lund_street_at_sunset.jpg',
		alt: 'Lund Street at Sunset',
	},
	{
		src: '/images/optimized_images/landscape_misty_hills.jpg',
		alt: 'Misty Hills',
	},
	{
		src: '/images/optimized_images/landscape_rome_colosseum.jpg',
		alt: 'Rome Colosseum',
	},
	{
		src: '/images/optimized_images/landscape_sailboat_in_a_blizzard.jpg',
		alt: 'Sailboat in a Blizzard',
	},
	{
		src: '/images/optimized_images/landscape_salzburg_cathedral.jpg',
		alt: 'Salzburg Cathedral',
	},
	{
		src: '/images/optimized_images/landscape_salzburg_church_with_alps_behind.jpg',
		alt: 'Salzburg Church with Alps Behind',
	},
	{
		src: '/images/optimized_images/landscape_spring_flowers_lund.jpg',
		alt: 'Spring Flowers in Lund',
	},
	{
		src: '/images/optimized_images/landscape_tromso_dog.jpg',
		alt: 'Tromso Dog',
	},
	{
		src: '/images/optimized_images/landscape_tromso_harbor.jpg',
		alt: 'Tromso Harbor',
	},
	{
		src: '/images/optimized_images/landscape_vienna_hustling.jpg',
		alt: 'Vienna Hustling',
	},
	{
		src: '/images/optimized_images/landscape_copenhagen_corner.jpg',
		alt: 'Copenhagen Corner',
	},
	{
		src: '/images/optimized_images/landscape_bavarian_homstead.jpg',
		alt: 'Bavarian Homestead',
	},
	{
		src: '/images/optimized_images/3_landscape_tree_in_the_alps.jpg',
		alt: 'Tree in the Alps',
	},
	{
		src: '/images/optimized_images/3_landscape_lago_di_braies.jpg',
		alt: 'Lago di Braies',
	},
	{
		src: '/images/optimized_images/2_landscape_bridge_in_lofoten_islands.jpg',
		alt: 'Bridge in Lofoten Islands',
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
					<TabsList className='mb-8 flex flex-wrap'>
						<TabsTrigger value='all'>All</TabsTrigger>
						<TabsTrigger value='product'>Product</TabsTrigger>
						<TabsTrigger value='lifestyle'>Lifestyle</TabsTrigger>
						<TabsTrigger value='portrait'>Portrait</TabsTrigger>
						<TabsTrigger value='landscape'>Landscape</TabsTrigger>
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

					<TabsContent value='portrait' className='mt-0'>
						<PhotoGallery photos={portraitPhotos} />
					</TabsContent>

					<TabsContent value='landscape' className='mt-0'>
						<PhotoGallery photos={landscapePhotos} />
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
