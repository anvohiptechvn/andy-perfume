import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Thông tin chi tiết | Andy Perfume',
	description: 'Khám phá chi tiết các bài viết, tin tức và hướng dẫn về nước hoa tại Andy Perfume.',
	keywords: ['blog', 'bài viết', 'nước hoa', 'Andy Perfume', 'tin tức', 'hướng dẫn', 'chi tiết'],
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
		type: 'article',
		locale: 'vi_VN',
		url: 'https://andyperfume.com/thong-tin',
		siteName: 'Andy Perfume',
		title: 'Thông tin chi tiết | Andy Perfume',
		description: 'Khám phá chi tiết các bài viết, tin tức và hướng dẫn về nước hoa tại Andy Perfume.',
		images: [
			{
				url: 'https://andyperfume.com/og-blog.jpg',
				width: 1200,
				height: 630,
				alt: 'Thông tin chi tiết - Andy Perfume',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Thông tin chi tiết | Andy Perfume',
		description: 'Khám phá chi tiết các bài viết, tin tức và hướng dẫn về nước hoa tại Andy Perfume.',
		images: ['https://andyperfume.com/og-blog.jpg'],
		creator: '@andyperfume',
	},
	alternates: {
		canonical: 'https://andyperfume.com/thong-tin',
	},
};

interface InformationLayoutProps {
	children: React.ReactNode;
}

export default function InformationLayout({ children }: InformationLayoutProps) {
	return <div className="h-full w-full">{children}</div>;
}
