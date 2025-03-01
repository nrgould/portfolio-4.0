'use client';

import Image from 'next/image';
import Link from 'next/link';

// Contact Form Component
const ContactForm = () => {
	return (
		<form className='space-y-4'>
			<div className='space-y-2'>
				<label htmlFor='name' className='block text-sm font-light'>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					className='w-full p-2 border border-border bg-background text-sm font-light'
					required
				/>
			</div>

			<div className='space-y-2'>
				<label htmlFor='email' className='block text-sm font-light'>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					className='w-full p-2 border border-border bg-background text-sm font-light'
					required
				/>
			</div>

			<div className='space-y-2'>
				<label htmlFor='subject' className='block text-sm font-light'>
					Subject
				</label>
				<select
					id='subject'
					name='subject'
					className='w-full p-2 border border-border bg-background text-sm font-light'
					required
				>
					<option value=''>Select a subject</option>
					<option value='Product Photography'>
						Product Photography
					</option>
					<option value='Lifestyle Photography'>
						Lifestyle Photography
					</option>
					<option value='Brand Campaign'>Brand Campaign</option>
					<option value='General Inquiry'>General Inquiry</option>
				</select>
			</div>

			<div className='space-y-2'>
				<label htmlFor='message' className='block text-sm font-light'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					rows={6}
					className='w-full p-2 border border-border bg-background text-sm font-light'
					required
				></textarea>
			</div>

			<button
				type='submit'
				className='w-full px-6 py-2 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300'
			>
				Send Message
			</button>
		</form>
	);
};

export default function Contact() {
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
							className='block text-muted-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
						>
							ABOUT
						</Link>
						<Link
							href='/contact'
							className='block text-foreground font-light tracking-wide text-sm hover:text-primary transition-colors'
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
					<h1 className='text-3xl font-light mb-8'>Contact</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
						<div>
							<h2 className='text-xl font-light mb-4'>
								Get in Touch
							</h2>
							<p className='text-muted-foreground font-light leading-relaxed mb-6'>
								I&apos;d love to hear about your project. Please
								fill out the form or reach out directly via
								email or phone.
							</p>

							<div className='space-y-4 mb-8'>
								<div>
									<h3 className='text-lg font-light'>
										Email
									</h3>
									<a
										href='mailto:hello@nicholasgould.com'
										className='text-muted-foreground font-light hover:text-foreground'
									>
										hello@nicholasgould.com
									</a>
								</div>
								<div>
									<h3 className='text-lg font-light'>
										Phone
									</h3>
									<a
										href='tel:+19195551234'
										className='text-muted-foreground font-light hover:text-foreground'
									>
										+1 (919) 555-1234
									</a>
								</div>
								<div>
									<h3 className='text-lg font-light'>
										Location
									</h3>
									<p className='text-muted-foreground font-light'>
										North Carolina, USA
									</p>
								</div>
							</div>

							<h3 className='text-lg font-light mb-2'>
								Follow Me
							</h3>
							<div className='flex space-x-4'>
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
										<line
											x1='17.5'
											x2='17.51'
											y1='6.5'
											y2='6.5'
										/>
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
										<rect
											width='4'
											height='12'
											x='2'
											y='9'
										/>
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
						</div>

						<div>
							<ContactForm />
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
