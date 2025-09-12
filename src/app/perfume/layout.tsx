import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Perfume | Andy Perfume',
	description:
		'Discover our exquisite collection of premium perfumes and luxury fragrances. Find your perfect scent from our curated selection of world-class perfumes for men and women.',
	keywords: ['perfume', 'andy perfume', 'fragrance', 'luxury perfumes', 'premium scents', 'men perfume', 'women perfume', 'signature fragrances'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Perfume | Andy Perfume',
		description: 'Discover our exquisite collection of premium perfumes and luxury fragrances.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Perfume | Andy Perfume',
		description: 'Discover our exquisite collection of premium perfumes and luxury fragrances.',
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

export default function PerfumeLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
