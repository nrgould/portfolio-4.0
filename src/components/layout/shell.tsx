'use client';

import React from 'react';

export function Shell({ children }: { children: React.ReactNode }) {
	return <div className='flex-1 flex flex-col w-full'>{children}</div>;
}
