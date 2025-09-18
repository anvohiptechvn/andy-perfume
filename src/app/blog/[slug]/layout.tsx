import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bài viết | Andy Perfume',
	description: 'Đọc các bài viết, tin tức và hướng dẫn về nước hoa từ Andy Perfume.',
	keywords: ['blog', 'bài viết', 'nước hoa', 'Andy Perfume', 'tin tức', 'hướng dẫn'],
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
		url: 'https://andyperfume.com/blog',
		siteName: 'Andy Perfume',
		title: 'Bài viết | Andy Perfume',
		description: 'Đọc các bài viết, tin tức và hướng dẫn về nước hoa từ Andy Perfume.',
		images: [
			{
				url: 'https://andyperfume.com/og-blog.jpg',
				width: 1200,
				height: 630,
				alt: 'Bài viết - Andy Perfume',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Bài viết | Andy Perfume',
		description: 'Đọc các bài viết, tin tức và hướng dẫn về nước hoa từ Andy Perfume.',
		images: ['https://andyperfume.com/og-blog.jpg'],
		creator: '@andyperfume',
	},
	alternates: {
		canonical: 'https://andyperfume.com/blog',
	},
};

interface BlogLayoutProps {
	children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
	return <div className="h-full w-full">{children}</div>;
}
