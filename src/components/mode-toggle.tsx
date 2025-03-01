'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={() =>
				setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
			}
			title={`Switch to ${
				resolvedTheme === 'dark' ? 'light' : 'dark'
			} mode`}
		>
			{resolvedTheme === 'dark' ? (
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
					className='h-[1.2rem] w-[1.2rem]'
				>
					<circle cx='12' cy='12' r='5' />
					<path d='M12 1v2' />
					<path d='M12 21v2' />
					<path d='M4.22 4.22l1.42 1.42' />
					<path d='M18.36 18.36l1.42 1.42' />
					<path d='M1 12h2' />
					<path d='M21 12h2' />
					<path d='M4.22 19.78l1.42-1.42' />
					<path d='M18.36 5.64l1.42-1.42' />
				</svg>
			) : (
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
					className='h-[1.2rem] w-[1.2rem]'
				>
					<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
				</svg>
			)}
		</Button>
	);
}
