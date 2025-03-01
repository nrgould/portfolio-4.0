import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Photography() {
	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Left Side Navigation */}
			<div className='md:w-64 lg:w-72 md:fixed md:h-screen p-8 flex flex-col justify-between'>
				<div>
					{/* Logo */}
					<div className='mb-12'>
						<Link href='/' className='block'>
							<div className='w-16 h-16 relative mb-4'>
								<Image
									src='/images/logo.png'
									alt='Nicholas Gould Photography'
									width={64}
									height={64}
									className='object-contain'
								/>
							</div>
							<h1 className='text-lg font-light tracking-wide'>
								Nicholas Gould
							</h1>
						</Link>
					</div>

					{/* Main Navigation */}
					<nav className='space-y-6'>
						<Link
							href='/photography'
							className='block text-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							PHOTOGRAPHY
						</Link>
						<Link
							href='/case-studies'
							className='block text-muted-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							CASE STUDIES
						</Link>
						<Link
							href='/about'
							className='block text-muted-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							ABOUT
						</Link>
						<Link
							href='/contact'
							className='block text-muted-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							CONTACT
						</Link>
					</nav>
				</div>

				{/* Social Links */}
				<div className='hidden md:block'>
					<div className='flex space-x-4 mb-4'>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground'
						>
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
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground'
						>
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
							>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
								<rect width='4' height='12' x='2' y='9' />
								<circle cx='4' cy='4' r='2' />
							</svg>
						</a>
						<a
							href='https://behance.net'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground'
						>
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
							>
								<path d='M1 12h6v4H1z' />
								<path d='M8 8h6v8H8z' />
								<path d='M15 4h6v12h-6z' />
							</svg>
						</a>
					</div>
					<p className='text-xs text-muted-foreground'>
						© {new Date().getFullYear()} Nicholas Gould
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8'>
				<h1 className='text-2xl font-light mb-8'>Photography</h1>

				<Tabs defaultValue='all' className='w-full'>
					<TabsList className='mb-8'>
						<TabsTrigger value='all' className='text-sm font-light'>
							All
						</TabsTrigger>
						<TabsTrigger
							value='product'
							className='text-sm font-light'
						>
							Product
						</TabsTrigger>
						<TabsTrigger
							value='lifestyle'
							className='text-sm font-light'
						>
							Lifestyle
						</TabsTrigger>
						<TabsTrigger
							value='brand'
							className='text-sm font-light'
						>
							Brand
						</TabsTrigger>
					</TabsList>

					<TabsContent value='all' className='mt-0'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{allPhotos.map((photo, index) => (
								<div
									key={index}
									className='group relative aspect-square overflow-hidden'
								>
									<Image
										src={photo.src}
										alt={photo.alt}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
									<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
										<span className='text-white text-lg font-light'>
											{photo.alt}
										</span>
									</div>
								</div>
							))}
						</div>
					</TabsContent>

					<TabsContent value='product' className='mt-0'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{productPhotos.map((photo, index) => (
								<div
									key={index}
									className='group relative aspect-square overflow-hidden'
								>
									<Image
										src={photo.src}
										alt={photo.alt}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
									<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
										<span className='text-white text-lg font-light'>
											{photo.alt}
										</span>
									</div>
								</div>
							))}
						</div>
					</TabsContent>

					<TabsContent value='lifestyle' className='mt-0'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{lifestylePhotos.map((photo, index) => (
								<div
									key={index}
									className='group relative aspect-square overflow-hidden'
								>
									<Image
										src={photo.src}
										alt={photo.alt}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
									<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
										<span className='text-white text-lg font-light'>
											{photo.alt}
										</span>
									</div>
								</div>
							))}
						</div>
					</TabsContent>

					<TabsContent value='brand' className='mt-0'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{brandPhotos.map((photo, index) => (
								<div
									key={index}
									className='group relative aspect-square overflow-hidden'
								>
									<Image
										src={photo.src}
										alt={photo.alt}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
									<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
										<span className='text-white text-lg font-light'>
											{photo.alt}
										</span>
									</div>
								</div>
							))}
						</div>
					</TabsContent>
				</Tabs>

				{/* Mobile Footer */}
				<div className='md:hidden mt-12'>
					<div className='flex justify-center space-x-6 mb-4'>
						<a
							href='https://instagram.com'
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
							href='https://linkedin.com'
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
							href='https://behance.net'
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
								<path d='M1 12h6v4H1z' />
								<path d='M8 8h6v8H8z' />
								<path d='M15 4h6v12h-6z' />
							</svg>
						</a>
					</div>
					<p className='text-xs text-muted-foreground text-center'>
						© {new Date().getFullYear()} Nicholas Gould
					</p>
				</div>
			</div>
		</div>
	);
}

// Photo collections
const productPhotos = [
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles1.jpg',
		alt: 'Eight Angles Collection',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles2.jpg',
		alt: 'Eight Angles Lifestyle',
	},
	{
		src: '/images/optimized_images/product_lifestyle_eight_angles3.jpg',
		alt: 'Eight Angles Detail',
	},
	{
		src: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
		alt: 'Ravens Brew Coffee',
	},
	{ src: '/images/R6II6459-Edit.jpg', alt: 'Product Detail' },
	{ src: '/images/R6II6399-Edit.jpg', alt: 'Studio Photography' },
];

const lifestylePhotos = [
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
		src: '/images/optimized_images/lifestyle_smartwool_beanie.jpg',
		alt: 'Smartwool Beanie',
	},
	{
		src: '/images/optimized_images/lifestyle_eight_angles_model.jpg',
		alt: 'Eight Angles Model',
	},
];

const brandPhotos = [
	{
		src: '/images/optimized_images/brand_smartwool_campaign.jpg',
		alt: 'Smartwool Campaign',
	},
	{
		src: '/images/optimized_images/brand_eight_angles_lookbook.jpg',
		alt: 'Eight Angles Lookbook',
	},
	{
		src: '/images/optimized_images/brand_ravens_brew_packaging.jpg',
		alt: 'Ravens Brew Packaging',
	},
];

// Combine all photos for the "All" tab
const allPhotos = [...productPhotos, ...lifestylePhotos, ...brandPhotos];
