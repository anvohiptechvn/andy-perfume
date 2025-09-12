import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Brand | Andy Perfume',
	description:
		'Explore our premium fragrance brands and discover the finest collection of luxury perfumes. Find your signature scent from our curated selection of world-class fragrances.',
	keywords: ['brand', 'andy perfume', 'fragrance brands', 'luxury perfumes', 'premium scents', 'signature fragrances'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Brand | Andy Perfume',
		description: 'Explore our premium fragrance brands and discover the finest collection of luxury perfumes.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Brand | Andy Perfume',
		description: 'Explore our premium fragrance brands and discover the finest collection of luxury perfumes.',
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

export default function BrandLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
