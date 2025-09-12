import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Perfume Extract | Premium Fragrance Extraction Services',
	description:
		'Discover our premium perfume extract services. Expert fragrance extraction, custom scent creation, and luxury perfume development for discerning clients.',
	keywords: 'perfume extract, fragrance extraction, custom perfume, luxury scents, perfume development, essential oils, fragrance creation',
	openGraph: {
		title: 'Perfume Extract | Premium Fragrance Extraction Services',
		description: 'Discover our premium perfume extract services. Expert fragrance extraction, custom scent creation, and luxury perfume development.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Perfume Extract | Premium Fragrance Extraction Services',
		description: 'Discover our premium perfume extract services. Expert fragrance extraction, custom scent creation, and luxury perfume development.',
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
	alternates: {
		canonical: '/perfume-extract',
	},
};

export default function PerfumeExtractLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
