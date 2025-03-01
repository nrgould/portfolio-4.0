import Link from 'next/link';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-full py-12'>
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

				<div className='flex flex-col md:flex-row items-center justify-center gap-6'>
					<p className='text-sm font-light text-muted-foreground text-center'>
						© {currentYear} NRG Studios, LLC
					</p>
				</div>
			</div>
		</footer>
	);
}
