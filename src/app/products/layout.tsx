import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Thương hiệu nước hoa | Andy Perfume',
	description:
		'Khám phá các thương hiệu nước hoa cao cấp tại Andy Perfume. Bộ sưu tập nước hoa chính hãng, đa dạng thương hiệu nổi tiếng thế giới, giúp bạn tìm được mùi hương đặc trưng cho riêng mình.',
	keywords: [
		'thương hiệu nước hoa',
		'andy perfume',
		'nước hoa chính hãng',
		'nước hoa cao cấp',
		'perfume brands',
		'luxury perfumes',
		'fragrance',
		'parfumerie',
		'brand',
		'premium scents',
	],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Thương hiệu nước hoa | Andy Perfume',
		description: 'Khám phá các thương hiệu nước hoa cao cấp tại Andy Perfume. Bộ sưu tập nước hoa chính hãng, đa dạng thương hiệu nổi tiếng thế giới.',
		type: 'website',
		locale: 'vi_VN',
		url: 'https://Andy Perfume/products',
		siteName: 'Andy Perfume',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Thương hiệu nước hoa | Andy Perfume',
		description: 'Khám phá các thương hiệu nước hoa cao cấp tại Andy Perfume. Bộ sưu tập nước hoa chính hãng, đa dạng thương hiệu nổi tiếng thế giới.',
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

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
