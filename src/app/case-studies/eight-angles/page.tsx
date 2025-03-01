import Image from 'next/image';
import Link from 'next/link';

export default function EightAnglesCaseStudy() {
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
					<div className='mb-8'>
						<Link
							href='/case-studies'
							className='text-muted-foreground font-light hover:text-foreground flex items-center'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='mr-2'
							>
								<path d='M19 12H5M12 19l-7-7 7-7' />
							</svg>
							Back to Case Studies
						</Link>
					</div>

					<h1 className='text-3xl font-light mb-4'>
						Eight Angles Collection
					</h1>

					<div className='aspect-[16/9] relative mb-8'>
						<Image
							src='/images/optimized_images/product_eight_angles_vase.jpg'
							alt='Eight Angles Collection'
							fill
							className='object-cover'
						/>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Project Overview
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								Eight Angles, a premium home decor brand,
								commissioned a product photography series for
								their new collection of minimalist ceramic vases
								and decorative objects. The goal was to create
								clean, elegant imagery that highlighted the
								unique geometric forms and subtle textures of
								their handcrafted pieces.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								The photography needed to align with their brand
								aesthetic of understated luxury while showcasing
								the versatility of their products in
								contemporary home settings.
							</p>
						</div>
						<div>
							<h2 className='text-xl font-light mb-4'>
								The Approach
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								I developed a minimalist studio setup with
								carefully controlled lighting to accentuate the
								clean lines and subtle details of each piece.
								The photography style emphasized negative space,
								creating a sense of calm sophistication that
								aligned with the brand's identity.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								For context shots, I created simple vignettes
								that suggested how the pieces might be displayed
								in a home, using neutral backgrounds and
								complementary props that wouldn't distract from
								the featured products.
							</p>
						</div>
					</div>

					<h2 className='text-xl font-light mb-6 text-center'>
						The Results
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/product_eight_angles_vase.jpg'
								alt='Eight Angles Vase'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/product_eight_angles_bowl.jpg'
								alt='Eight Angles Bowl'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/product_eight_angles_set.jpg'
								alt='Eight Angles Set'
								fill
								className='object-cover'
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Key Challenges
							</h2>
							<ul className='text-muted-foreground font-light space-y-2'>
								<li>
									• Capturing the subtle textures and finishes
									of ceramic surfaces
								</li>
								<li>
									• Creating consistent lighting across
									various product shapes and sizes
								</li>
								<li>
									• Balancing minimalist aesthetics with
									product detail visibility
								</li>
								<li>
									• Developing a cohesive visual language
									across the entire collection
								</li>
							</ul>
						</div>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Client Feedback
							</h2>
							<p className='text-muted-foreground font-light italic'>
								"Nicholas understood our aesthetic perfectly.
								The images capture not just our products, but
								the essence of our brand philosophy. The clean,
								thoughtful compositions have significantly
								elevated our online presence and marketing
								materials."
							</p>
							<p className='text-muted-foreground font-light mt-4'>
								— Creative Director, Eight Angles
							</p>
						</div>
					</div>

					<div className='text-center'>
						<Link
							href='/case-studies'
							className='inline-block px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
						>
							View More Case Studies
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
