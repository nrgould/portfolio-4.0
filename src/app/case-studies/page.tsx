import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudies() {
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
							className='block text-muted-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							PHOTOGRAPHY
						</Link>
						<Link
							href='/case-studies'
							className='block text-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
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
			<div className='flex-1 md:ml-64 lg:ml-72'>
				<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24'>
					<h1 className='text-3xl font-light mb-8'>Case Studies</h1>
					<p className='text-muted-foreground font-light mb-12'>
						Explore in-depth case studies of my work with brands
						across various industries.
					</p>

					{/* Featured Case Study - Smartwool */}
					<div className='mb-16'>
						<h2 className='text-2xl font-light mb-4'>
							Smartwool Campaign
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-muted-foreground font-light leading-relaxed mb-6'>
									A comprehensive product and lifestyle
									campaign for Smartwool's outdoor apparel
									line, showcasing their products in natural
									environments.
								</p>
								<Link
									href='/case-studies/smartwool'
									className='inline-block px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
								>
									View Case Study
								</Link>
							</div>
							<div className='aspect-[4/3] relative'>
								<Image
									src='/images/optimized_images/lifestyle_smartwool_jacket.jpg'
									alt='Smartwool Campaign'
									fill
									className='object-cover'
								/>
							</div>
						</div>
					</div>

					{/* Featured Case Study - Eight Angles */}
					<div className='mb-16'>
						<h2 className='text-2xl font-light mb-4'>
							Eight Angles Collection
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div className='order-2 md:order-1 aspect-[4/3] relative'>
								<Image
									src='/images/optimized_images/product_lifestyle_eight_angles1.jpg'
									alt='Eight Angles Collection'
									fill
									className='object-cover'
								/>
							</div>
							<div className='order-1 md:order-2'>
								<p className='text-muted-foreground font-light leading-relaxed mb-6'>
									Product and lifestyle photography for Eight
									Angles' latest collection, highlighting the
									craftsmanship and design of their products.
								</p>
								<Link
									href='/case-studies/eight-angles'
									className='inline-block px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
								>
									View Case Study
								</Link>
							</div>
						</div>
					</div>

					{/* Featured Case Study - Ravens Brew */}
					<div>
						<h2 className='text-2xl font-light mb-4'>
							Ravens Brew Coffee
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<p className='text-muted-foreground font-light leading-relaxed mb-6'>
									Product photography for Ravens Brew Coffee's
									packaging and marketing materials, capturing
									the essence of their brand.
								</p>
								<Link
									href='/case-studies/ravens-brew'
									className='inline-block px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
								>
									View Case Study
								</Link>
							</div>
							<div className='aspect-[4/3] relative'>
								<Image
									src='/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg'
									alt='Ravens Brew Coffee'
									fill
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Footer */}
				<div className='md:hidden p-8 mt-4'>
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
