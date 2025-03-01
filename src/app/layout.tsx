import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

// const inter = Inter({
// 	variable: '--font-inter',
// 	subsets: ['latin'],
// });

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nicholas Gordon | Photography',
	description: 'Product and Lifestyle Photography Portfolio',
	keywords: [
		'photography',
		'product photography',
		'lifestyle photography',
		'portfolio',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className='flex-1 flex flex-col'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
