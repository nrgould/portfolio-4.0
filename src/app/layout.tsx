import type { Metadata } from 'next';
import { Montserrat, Josefin_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	display: 'swap',
});

const josefinSans = Josefin_Sans({
	variable: '--font-josefin-sans',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Nicholas Gould | Photography',
	description: 'Product and Lifestyle Photography Portfolio',
	keywords: [
		'photography',
		'product photography',
		'lifestyle photography',
		'portfolio',
		'nicholas gould',
		'Raleigh, NC photographer',
		'Raleigh, NC product photographer',
		'Raleigh, NC lifestyle photographer',
		'Raleigh, NC food photographer',
		'Raleigh, NC product photography',
		'Raleigh, NC lifestyle photography',
		'Raleigh, NC food photography',
		'Raleigh, NC product photography',
		'Morganton, NC photographer',
		'Morganton, NC product photographer',
		'Morganton, NC lifestyle photographer',
		'Morganton, NC food photographer',
		'Morganton, NC product photography',
		'Morganton, NC lifestyle photography',
		'Morganton, NC food photography',
		'Morganton, NC product photography',
		'Apex, NC photographer',
		'Apex, NC product photographer',
		'Apex, NC lifestyle photographer',
		'Apex, NC food photographer',
		'Apex, NC product photography',
		'Apex, NC lifestyle photography',
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
					<Header />
					<main className='flex-1 flex flex-col'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
