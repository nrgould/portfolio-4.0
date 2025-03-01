import type { Metadata } from 'next';
import { Montserrat, Josefin_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/layout/footer';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

const josefinSans = Josefin_Sans({
	variable: '--font-josefin-sans',
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
				className={`${montserrat.variable} ${josefinSans.variable} antialiased min-h-screen flex flex-col bg-zinc-900`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange
				>
					<main className='flex-1 flex flex-col'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
