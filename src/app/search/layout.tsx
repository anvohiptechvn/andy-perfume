import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tìm kiếm sản phẩm | Parfumerie',
	description: 'Tìm kiếm các sản phẩm nước hoa, mỹ phẩm chính hãng tại Andy Perfume. Khám phá bộ sưu tập đa dạng và ưu đãi hấp dẫn.',
	keywords: ['tìm kiếm', 'nước hoa', 'mỹ phẩm', 'Parfumerie', 'sản phẩm', 'ưu đãi'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Tìm kiếm sản phẩm | Parfumerie',
		description: 'Tìm kiếm các sản phẩm nước hoa, mỹ phẩm chính hãng tại Andy Perfume.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Tìm kiếm sản phẩm | Parfumerie',
		description: 'Tìm kiếm các sản phẩm nước hoa, mỹ phẩm chính hãng tại Andy Perfume.',
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
		canonical: '/search',
	},
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
