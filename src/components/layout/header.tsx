'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const routes = [
	{ href: '/', label: 'Home' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export function Header() {
	const pathname = usePathname();

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md'>
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<div className='flex gap-6 md:gap-10'>
						<Link href='/' className='flex items-center space-x-2'>
							<span className='font-medium sm:text-xl'>
								Nicholas Gould
							</span>
						</Link>
					</div>
					<nav className='hidden gap-6 md:flex'>
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={`text-sm font-medium transition-colors hover:text-primary ${
									pathname === route.href
										? 'text-foreground'
										: 'text-muted-foreground'
								}`}
							>
								{route.label}
							</Link>
						))}
						<ModeToggle />
					</nav>
					<Button variant='ghost' size='icon' className='md:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='h-5 w-5'
						>
							<line x1='4' x2='20' y1='12' y2='12' />
							<line x1='4' x2='20' y1='6' y2='6' />
							<line x1='4' x2='20' y1='18' y2='18' />
						</svg>
					</Button>
				</div>
			</div>
		</header>
	);
}
