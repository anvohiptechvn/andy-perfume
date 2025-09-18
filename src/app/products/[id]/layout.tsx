import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Sản phẩm | Andy Perfume',
	description: 'Xem chi tiết sản phẩm nước hoa tại Andy Perfume.',
	keywords: ['sản phẩm', 'nước hoa', 'Andy Perfume', 'chi tiết sản phẩm'],
	authors: [{ name: 'Andy Perfume' }],
	creator: 'Andy Perfume',
	publisher: 'Andy Perfume',
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
	openGraph: {
		type: 'website',
		locale: 'vi_VN',
		url: 'https://andyperfume.com/products',
		siteName: 'Andy Perfume',
		title: 'Sản phẩm | Andy Perfume',
		description: 'Xem chi tiết sản phẩm nước hoa tại Andy Perfume.',
		images: [
			{
				url: 'https://andyperfume.com/og-product.jpg',
				width: 1200,
				height: 630,
				alt: 'Sản phẩm - Andy Perfume',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sản phẩm | Andy Perfume',
		description: 'Xem chi tiết sản phẩm nước hoa tại Andy Perfume.',
		images: ['https://andyperfume.com/og-product.jpg'],
		creator: '@andyperfume',
	},
	alternates: {
		canonical: 'https://andyperfume.com/products',
	},
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}
