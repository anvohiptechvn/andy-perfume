import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog | Andy Perfume',
	description:
		'Discover the latest insights, tips, and trends in the world of fragrances. Read our expert blog posts about perfume, scents, and luxury fragrances.',
	keywords: ['blog', 'andy perfume', 'fragrance blog', 'perfume tips', 'scent trends', 'luxury fragrances', 'fragrance guide'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Blog | Andy Perfume',
		description: 'Discover the latest insights, tips, and trends in the world of fragrances.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog | Andy Perfume',
		description: 'Discover the latest insights, tips, and trends in the world of fragrances.',
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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
