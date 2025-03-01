'use client';

import Link from 'next/link';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-full border-t py-6 md:py-8'>
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
					<p className='text-sm text-muted-foreground'>
						© {currentYear} Nicholas Gordon Photography. All rights
						reserved.
					</p>
					<div className='flex items-center gap-4'>
						<Link
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
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-5 w-5'
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
							<span className='sr-only'>Instagram</span>
						</Link>
						<Link
							href='https://twitter.com'
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
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-5 w-5'
							>
								<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
							</svg>
							<span className='sr-only'>Twitter</span>
						</Link>
						<Link
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
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-5 w-5'
							>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
								<rect width='4' height='12' x='2' y='9' />
								<circle cx='4' cy='4' r='2' />
							</svg>
							<span className='sr-only'>LinkedIn</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
