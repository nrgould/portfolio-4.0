import Image from 'next/image';
import Link from 'next/link';

export default function SmartWoolCaseStudy() {
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
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8'>
				<div className='max-w-[75%] mx-auto'>
					<div className='mb-8'>
						<Link
							href='/case-studies'
							className='inline-flex items-center text-muted-foreground hover:text-foreground transition-colors'
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
						Smartwool Campaign
					</h1>

					<div className='aspect-[16/9] relative mb-8'>
						<Image
							src='/images/optimized_images/lifestyle_smartwool_jacket.jpg'
							alt='Smartwool Campaign'
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
								Smartwool approached me to create a series of
								product and lifestyle images for their new line
								of outdoor apparel and accessories. The goal was
								to showcase their products in authentic outdoor
								settings while highlighting the technical
								features and comfort of their merino wool
								products.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								The campaign included studio product photography
								as well as on-location lifestyle shoots in
								various outdoor environments, from mountain
								trails to urban settings.
							</p>
						</div>
						<div>
							<h2 className='text-xl font-light mb-4'>
								The Approach
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								For this project, I focused on creating a
								cohesive visual narrative that emphasized both
								the technical performance and everyday comfort
								of Smartwool products. The photography style
								balanced clean, detailed product shots with
								authentic lifestyle imagery showing the products
								in use.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed'>
								Working closely with the Smartwool team, we
								developed a shot list that covered their key
								product categories while maintaining a
								consistent visual language throughout the
								campaign.
							</p>
						</div>
					</div>

					<h2 className='text-xl font-light mb-6 text-center'>
						The Results
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/lifestyle_smartwool_jacket.jpg'
								alt='Smartwool Jacket'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/lifestyle_woman_hiking_with_smartwool_socks.jpg'
								alt='Hiking with Smartwool Socks'
								fill
								className='object-cover'
							/>
						</div>
						<div className='aspect-square relative'>
							<Image
								src='/images/optimized_images/lifestyle_holding_smartwool_socks.jpg'
								alt='Smartwool Socks'
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
									• Capturing the texture and quality of
									merino wool products
								</li>
								<li>
									• Creating authentic outdoor scenes in
									varying weather conditions
								</li>
								<li>
									• Balancing technical product details with
									lifestyle imagery
								</li>
								<li>
									• Maintaining consistent brand aesthetics
									across diverse environments
								</li>
							</ul>
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
