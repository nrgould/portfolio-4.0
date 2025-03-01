'use client';

import Link from 'next/link';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-full py-12 border-t border-border/20'>
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col items-center justify-center text-center mb-8'>
					<h3 className='text-xl font-light mb-4'>
						See more of my work:
					</h3>
					<div className='flex flex-wrap items-center justify-center gap-6 mb-8'>
						<Link
							href='https://www.instagram.com/nicholasgould1'
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground hover:text-primary transition-colors'
						>
							Instagram
						</Link>
						<Link
							href='https://www.threads.net/@nicholasgould1'
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground hover:text-primary transition-colors'
						>
							Threads
						</Link>
						<Link
							href='https://www.behance.net/nrgould197'
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground hover:text-primary transition-colors'
						>
							Behance
						</Link>
						<Link
							href='https://www.linkedin.com/in/nicholasgouldfpv/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground hover:text-primary transition-colors'
						>
							LinkedIn
						</Link>
					</div>
					<div className='text-muted-foreground font-light mb-8'>
						Also feel free to email me:
						<br />
						<Link
							href='mailto:hello@nicholasgouldphoto.com'
							className='text-foreground hover:text-primary transition-colors'
						>
							hello@nicholasgouldphoto.com
						</Link>
					</div>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					<p className='text-sm font-light text-muted-foreground'>
						© {currentYear} NRG Studios, LLC
					</p>
					<div className='flex items-center space-x-6'>
						<Link
							href='https://instagram.com/nicholasgould1'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground transition-colors'
							aria-label='Instagram'
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
						</Link>
						<Link
							href='https://www.threads.net/@nicholasgould1'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground transition-colors'
							aria-label='Threads'
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
								<path d='M19 7.2c-1.7-1.7-3.8-2-4.8-2h-.4c-.9 0-3 .3-4.8 2-1.7 1.7-2 3.8-2 4.8v.4c0 .9.3 3 2 4.8 1.7 1.7 3.8 2 4.8 2h.4c.9 0 3-.3 4.8-2 1.7-1.7 2-3.8 2-4.8v-.4c0-.9-.3-3-2-4.8z' />
								<path d='M7 10.5V13c0 2.5 1.5 4 4 4s4-1.5 4-4v-2' />
								<path d='M15 8.5V7c0-2.5-1.5-4-4-4s-4 1.5-4 4v2' />
							</svg>
						</Link>
						<Link
							href='https://www.behance.net/nrgould197'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground transition-colors'
							aria-label='Behance'
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
								<path d='M3 9h6c1 0 2 1 2 2s-1 2-2 2H3z' />
								<path d='M3 13h6c1 0 2 1 2 2s-1 2-2 2H3z' />
								<path d='M14 7h7' />
								<path d='M14 11h4c1 0 2-1 2-2s-1-2-2-2h-4z' />
								<path d='M14 15h4c1 0 2-1 2-2s-1-2-2-2h-4z' />
							</svg>
						</Link>
						<Link
							href='https://www.linkedin.com/in/nicholasgouldfpv/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-foreground transition-colors'
							aria-label='LinkedIn'
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
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
