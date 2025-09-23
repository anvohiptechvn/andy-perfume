import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Thông tin | Andy Perfume',
	description: 'Khám phá các bài viết, hướng dẫn và tài nguyên hữu ích về nước hoa và dịch vụ của Andy Perfume.',
	keywords: ['thông tin', 'kiến thức', 'bài viết', 'hướng dẫn', 'nước hoa', 'Andy Perfume', 'FAQ', 'hỗ trợ'],
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
		url: 'https://andyperfume.com/khuyen-mai',
		siteName: 'Andy Perfume',
		title: 'Thông tin | Andy Perfume',
		description: 'Khám phá các bài viết, hướng dẫn và tài nguyên hữu ích về nước hoa và dịch vụ của Andy Perfume.',
		images: [
			{
				url: 'https://andyperfume.com/og-thong-tin.jpg',
				width: 1200,
				height: 630,
				alt: 'Thông tin - Andy Perfume',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Thông tin | Andy Perfume',
		description: 'Khám phá các bài viết, hướng dẫn và tài nguyên hữu ích về nước hoa và dịch vụ của Andy Perfume.',
		images: ['https://andyperfume.com/og-thong-tin.jpg'],
		creator: '@andyperfume',
	},
	alternates: {
		canonical: 'https://andyperfume.com/khuyen-mai',
	},
};

interface InformationLayoutProps {
	children: React.ReactNode;
}

export default function InformationLayout({ children }: InformationLayoutProps) {
	return <div className="h-full w-full">{children}</div>;
}
