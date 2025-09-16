import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | Andy Perfume',
	description:
		'Learn more about Andy Perfume - your trusted source for premium fragrances and luxury scents. Discover our story, mission, and commitment to quality.',
	keywords: ['about', 'andy perfume', 'fragrance', 'perfume', 'luxury scents', 'premium fragrances'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'About | Andy Perfume',
		description: 'Learn more about Andy Perfume - your trusted source for premium fragrances and luxury scents.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About | Andy Perfume',
		description: 'Learn more about Andy Perfume - your trusted source for premium fragrances and luxury scents.',
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
