'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function Shell({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex-1 flex flex-col items-center justify-center w-full'>
			{children}
		</div>
	);
}
