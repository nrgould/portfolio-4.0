'use client';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export function Sidebar({ currentPath }: { currentPath: string }) {
	return (
		<>
			{/* Left Side Navigation */}
			<div className='md:w-64 lg:w-72 md:fixed md:h-screen p-8 flex flex-col justify-between'>
				<div>
					{/* Logo */}
					<div className='mb-12'>
						<Link href='/' className='block'>
							<motion.h1
								className='text-lg tracking-wide'
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								Nicholas Gould
							</motion.h1>
						</Link>
					</div>

					{/* Main Navigation */}
					<nav className='space-y-6'>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Link
								href='/photography'
								className={`block tracking-wide text-sm hover:text-primary transition-colors ${
									currentPath === '/photography'
										? 'text-foreground'
										: 'text-muted-foreground'
								}`}
							>
								PHOTOGRAPHY
							</Link>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Link
								href='/case-studies'
								className={`block tracking-wide text-sm hover:text-primary transition-colors ${
									currentPath.includes('/case-studies')
										? 'text-foreground'
										: 'text-muted-foreground'
								}`}
							>
								CASE STUDIES
							</Link>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Link
								href='/about'
								className={`block tracking-wide text-sm hover:text-primary transition-colors ${
									currentPath === '/about'
										? 'text-foreground'
										: 'text-muted-foreground'
								}`}
							>
								ABOUT
							</Link>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Link
								href='/contact'
								className={`block tracking-wide text-sm hover:text-primary transition-colors ${
									currentPath === '/contact'
										? 'text-foreground'
										: 'text-muted-foreground'
								}`}
							>
								CONTACT
							</Link>
						</motion.div>
					</nav>
				</div>

				{/* Social Links - Hidden on Mobile */}
				<motion.div
					className='hidden md:block'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.7 }}
				>
					<div className='flex space-x-4 mb-2'>
						<a
							href='https://instagram.com/nicholasgould1'
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
							href='https://www.linkedin.com/in/nicholasgouldfpv/'
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
							href='https://www.behance.net/nrgould197'
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
								<path d='M3 9h6c1 0 2 1 2 2s-1 2-2 2H3z' />
								<path d='M3 13h6c1 0 2 1 2 2s-1 2-2 2H3z' />
								<path d='M14 7h7' />
								<path d='M14 11h4c1 0 2-1 2-2s-1-2-2-2h-4z' />
								<path d='M14 15h4c1 0 2-1 2-2s-1-2-2-2h-4z' />
							</svg>
						</a>
					</div>
				</motion.div>
			</div>
		</>
	);
}
