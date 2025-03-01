import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
							className='block text-muted-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							CASE STUDIES
						</Link>
						<Link
							href='/about'
							className='block text-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
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
					<h1 className='text-3xl font-light mb-8'>About</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
						<div className='aspect-[3/4] relative'>
							<Image
								src='/images/nicholas_gould.jpg'
								alt='Nicholas Gould'
								fill
								className='object-cover'
							/>
						</div>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Nicholas Gould
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								I&apos;m a professional photographer
								specializing in product and lifestyle
								photography based in North Carolina, USA.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								With a keen eye for detail and composition, I
								create imagery that tells compelling stories for
								brands and individuals. My approach combines
								technical precision with an artistic vision to
								capture the essence of your products and the
								lifestyle they represent.
							</p>
							<p className='text-muted-foreground font-light leading-relaxed mb-4'>
								I believe that great photography is about more
								than just taking pictures – it&apos;s about
								creating a visual narrative that resonates with
								your audience and elevates your brand.
							</p>
						</div>
					</div>

					<div className='mb-12'>
						<h2 className='text-xl font-light mb-4'>My Approach</h2>
						<p className='text-muted-foreground font-light leading-relaxed mb-4'>
							I approach each project with a collaborative
							mindset, working closely with clients to understand
							their vision and goals. Whether it&apos;s capturing
							the intricate details of a product or creating
							lifestyle imagery that showcases your brand&apos;s
							ethos, I bring a thoughtful and meticulous approach
							to every shoot.
						</p>
						<p className='text-muted-foreground font-light leading-relaxed mb-4'>
							My work is characterized by clean compositions,
							attention to detail, and a natural aesthetic that
							allows the subject to shine. I believe in creating
							images that are not only visually striking but also
							authentic and purposeful.
						</p>
					</div>

					<div className='mb-12'>
						<h2 className='text-xl font-light mb-4'>Services</h2>
						<ul className='space-y-4'>
							<li>
								<h3 className='text-lg font-light'>
									Product Photography
								</h3>
								<p className='text-muted-foreground font-light leading-relaxed'>
									Showcase your products with clean, detailed
									imagery that highlights their features and
									quality. Perfect for e-commerce, catalogs,
									and marketing materials.
								</p>
							</li>
							<li>
								<h3 className='text-lg font-light'>
									Lifestyle Photography
								</h3>
								<p className='text-muted-foreground font-light leading-relaxed'>
									Bring your products to life with contextual
									imagery that shows them in use. Ideal for
									creating an emotional connection with your
									audience.
								</p>
							</li>
							<li>
								<h3 className='text-lg font-light'>
									Brand Campaigns
								</h3>
								<p className='text-muted-foreground font-light leading-relaxed'>
									Develop a cohesive visual identity for your
									brand with photography that tells your story
									and resonates with your target audience.
								</p>
							</li>
						</ul>
					</div>

					<div>
						<h2 className='text-xl font-light mb-4'>
							Let&apos;s Work Together
						</h2>
						<p className='text-muted-foreground font-light leading-relaxed mb-6'>
							I&apos;m always excited to collaborate on new
							projects and help brands elevate their visual
							presence. If you&apos;re interested in working
							together, please get in touch to discuss your
							project.
						</p>
						<Link
							href='/contact'
							className='inline-block px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
						>
							Contact Me
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
