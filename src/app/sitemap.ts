import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.nicholasgouldphoto.com';
	const currentDate = new Date();

	// Main pages
	const pages = [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/photography`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.9,
			images: [
				// Product & Lifestyle images
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles1.jpg`,
				`${baseUrl}/images/optimized_images/lifestyle_smartwool_jacket.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg`,
				`${baseUrl}/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles2.jpg`,
				`${baseUrl}/images/R6II6459-Edit.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles3.jpg`,
				`${baseUrl}/images/R6II6399-Edit.jpg`,
				`${baseUrl}/images/optimized_images/lifestyle_holding_smartwool_socks.jpg`,

				// Portrait images
				`${baseUrl}/images/optimized_images/portrait_girl_posing_with_cherry_blossoms_1.jpg`,
				`${baseUrl}/images/optimized_images/1_portrait_couple_looking_at_eachother_sunset.jpg`,
				`${baseUrl}/images/optimized_images/portrait_thomas_stockholm_street_sunset.jpg`,

				// Landscape images
				`${baseUrl}/images/optimized_images/landscape_dolomites_santa_magdalena.jpg`,
				`${baseUrl}/images/optimized_images/1_landscape_snowy_church_lofoten_islands_norway.jpg`,
				`${baseUrl}/images/new_images/landscape_vienna_schonnbrunn.jpg`,
				`${baseUrl}/images/new_images/landscape_vienna_botanical_garden.jpg`,
				`${baseUrl}/images/new_images/landscape_vienna_dome.jpg`,
				`${baseUrl}/images/new_images/landscape_roman_colosseum.jpg`,
				`${baseUrl}/images/optimized_images/landscape_dolomites_seceda.jpg`,
				`${baseUrl}/images/optimized_images/landscape_dolomites_sunset.jpg`,
				`${baseUrl}/images/optimized_images/landscape_heart_hut_in_norway.jpg`,
				`${baseUrl}/images/optimized_images/landscape_rome_colosseum.jpg`,
				`${baseUrl}/images/optimized_images/landscape_salzburg_cathedral.jpg`,
			],
		},
		{
			url: `${baseUrl}/case-studies`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
			images: [
				`${baseUrl}/images/optimized_images/lifestyle_smartwool_jacket.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles1.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg`,
			],
		},
		{
			url: `${baseUrl}/about`,
			lastModified: currentDate,
			changeFrequency: 'yearly' as const,
			priority: 0.7,
			images: [`${baseUrl}/images/nicholas_gould.jpg`],
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: 'yearly' as const,
			priority: 0.7,
		},
	];

	// Case study pages
	const caseStudies = [
		{
			url: `${baseUrl}/case-studies/smartwool`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
			images: [
				`${baseUrl}/images/optimized_images/lifestyle_smartwool_jacket.jpg`,
				`${baseUrl}/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg`,
				`${baseUrl}/images/optimized_images/lifestyle_holding_smartwool_socks.jpg`,
			],
		},
		{
			url: `${baseUrl}/case-studies/eight-angles`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
			images: [
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles1.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles2.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles3.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles4.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles5.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles6.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_eight_angles7.jpg`,
			],
		},
		{
			url: `${baseUrl}/case-studies/ravens-brew`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
			images: [
				`${baseUrl}/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg`,
				`${baseUrl}/images/optimized_images/2_product_lifestyle_ravens_brew_ferns.jpg`,
				`${baseUrl}/images/optimized_images/1_product_lifestyle_ravens_brew_deadmans_reach_on_stump.jpg`,
				`${baseUrl}/images/optimized_images/product_lifestyle_ravens_brew_indoors.jpg`,
				`${baseUrl}/images/optimized_images/lifestyle_product_ravens_brew_deadmans_reach_coffee.jpg`,
			],
		},
	];

	// Photography category pages
	const photographyCategories = [
		{
			url: `${baseUrl}/photography?category=product`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/photography?category=lifestyle`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/photography?category=portrait`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/photography?category=landscape`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
	];

	return [...pages, ...caseStudies, ...photographyCategories];
}
