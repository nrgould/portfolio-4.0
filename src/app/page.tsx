import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

			{/* Mosaic Gallery - Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72'>
				<div className='mosaic-grid p-2 md:p-4'>
					{/* Row 1 */}
					<div className='mosaic-item mosaic-item-1'>
						<Link
							href='/portfolio/eight-angles-1'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/product_lifestyle_eight_angles1.jpg'
									alt='Eight Angles Collection'
									fill
									sizes='(max-width: 768px) 100vw, 50vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Eight Angles Collection
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className='mosaic-item mosaic-item-2'>
						<Link
							href='/portfolio/smartwool-1'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/lifestyle_smartwool_jacket.jpg'
									alt='Smartwool Jacket'
									fill
									sizes='(max-width: 768px) 100vw, 50vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Smartwool Jacket
									</span>
								</div>
							</div>
						</Link>
					</div>

					{/* Row 2 */}
					<div className='mosaic-item mosaic-item-3'>
						<Link
							href='/portfolio/ravens-brew'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg'
									alt='Ravens Brew Coffee'
									fill
									sizes='(max-width: 768px) 100vw, 33vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Ravens Brew Coffee
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className='mosaic-item mosaic-item-4'>
						<Link
							href='/portfolio/smartwool-2'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg'
									alt='Smartwool Hiking'
									fill
									sizes='(max-width: 768px) 100vw, 33vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Smartwool Hiking
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className='mosaic-item mosaic-item-5'>
						<Link
							href='/portfolio/eight-angles-2'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/product_lifestyle_eight_angles2.jpg'
									alt='Eight Angles Lifestyle'
									fill
									sizes='(max-width: 768px) 100vw, 33vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Eight Angles Lifestyle
									</span>
								</div>
							</div>
						</Link>
					</div>

					{/* Row 3 */}
					<div className='mosaic-item mosaic-item-6'>
						<Link
							href='/portfolio/new-image-1'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/R6II6459-Edit.jpg'
									alt='Product Detail'
									fill
									sizes='(max-width: 768px) 100vw, 25vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Product Detail
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className='mosaic-item mosaic-item-7'>
						<Link
							href='/portfolio/eight-angles-3'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/product_lifestyle_eight_angles3.jpg'
									alt='Eight Angles Detail'
									fill
									sizes='(max-width: 768px) 100vw, 25vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Eight Angles Detail
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className='mosaic-item mosaic-item-8'>
						<Link
							href='/portfolio/new-image-2'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/R6II6399-Edit.jpg'
									alt='Studio Photography'
									fill
									sizes='(max-width: 768px) 100vw, 25vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Studio Photography
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className='mosaic-item mosaic-item-9'>
						<Link
							href='/portfolio/smartwool-3'
							className='group block h-full'
						>
							<div className='relative h-full overflow-hidden'>
								<Image
									src='/images/optimized_images/lifestyle_holding_smartwool_socks.jpg'
									alt='Smartwool Socks'
									fill
									sizes='(max-width: 768px) 100vw, 25vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100' />
								<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<span className='text-white text-lg font-light'>
										Smartwool Socks
									</span>
								</div>
							</div>
						</Link>
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
