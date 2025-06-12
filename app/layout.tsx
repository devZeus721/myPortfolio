import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'myOwnsite',
	description:
		'Welcome to my portfolio! I am a passionate designer who love creating simple and effective solutions. Explore my projects and creations approach.',

	keywords: [
		'Web Developer',
		'Simple Design',
		'JavaScript',
		'React',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Dion J MAtthew K',
	],
	authors: [{ name: 'Dion J MAtthew K' }],
	creator: 'Dion J MAtthew K',
	openGraph: {
		title: 'Dion J MAtthew K - Designer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://your-domain.com',
		siteName: 'myOwnPortfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Dion J MAtthew K - Designer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Dion J MAtthew K - Designer Portfolio',
		description: 'Welcome to my portfolio! I am a passionate designer who love creating simple and effective solutions.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
