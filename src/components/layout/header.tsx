'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import * as motion from 'motion/react-client';

const routes = [
	{ href: '/', label: 'Home' },
	{ href: '/photography', label: 'Photography' },
	{ href: '/case-studies', label: 'Case Studies' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export function Header() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-zinc-900/80 backdrop-blur-md py-3'
					: 'bg-transparent py-5'
			}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between'>
					<Link href='/' className='text-lg font-light tracking-wide'>
						Nicholas Gould
					</Link>
					<nav className='hidden md:flex items-center space-x-8'>
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={`text-sm font-light tracking-wide transition-colors hover:text-primary ${
									pathname === route.href
										? 'text-foreground'
										: 'text-muted-foreground'
								}`}
							>
								{route.label}
							</Link>
						))}
					</nav>

					{/* Mobile Navigation with Sheet */}
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<button
								className='md:hidden text-foreground'
								aria-label='Toggle menu'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
								>
									<line x1='4' x2='20' y1='12' y2='12' />
									<line x1='4' x2='20' y1='6' y2='6' />
									<line x1='4' x2='20' y1='18' y2='18' />
								</svg>
							</button>
						</SheetTrigger>
						<SheetContent
							side='right'
							className='pt-16 px-6 bg-zinc-900/95 backdrop-blur-md border-zinc-800'
						>
							<SheetHeader className='mb-8'>
								<SheetTitle className='text-left text-lg font-light'>
									Nicholas Gould
								</SheetTitle>
							</SheetHeader>
							<nav className='flex flex-col space-y-8'>
								{routes.map((route) => (
									<Link
										key={route.href}
										href={route.href}
										className={`text-base font-light tracking-wide transition-colors hover:text-primary ${
											pathname === route.href
												? 'text-foreground'
												: 'text-muted-foreground'
										}`}
										onClick={() => setIsOpen(false)}
									>
										{route.label}
									</Link>
								))}
							</nav>

							<div className='mt-12 pt-8 border-t border-zinc-800'>
								<div className='flex space-x-6 mb-2'>
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
											<line
												x1='17.5'
												x2='17.51'
												y1='6.5'
												y2='6.5'
											/>
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
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.header>
	);
}
