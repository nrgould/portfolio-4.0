'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const routes = [
	{ href: '/', label: 'Home' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/case-studies', label: 'Case Studies' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export function Header() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 z-50 w-full'>
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex h-20 items-center justify-between'>
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
								className='md:hidden'
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
							className='pt-10 px-6 bg-background'
						>
							<SheetHeader className='mb-6'>
								<SheetTitle className='text-left text-lg font-light'>
									Nicholas Gould
								</SheetTitle>
							</SheetHeader>
							<nav className='flex flex-col space-y-6'>
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
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
