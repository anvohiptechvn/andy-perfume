import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Knowledge Base | Parfumerie.vn',
	description: 'Comprehensive knowledge base with articles, guides, and resources to help you find answers and learn more about our products and services.',
	keywords: ['knowledge base', 'help center', 'documentation', 'guides', 'tutorials', 'FAQ', 'support'],
	authors: [{ name: 'Parfumerie.vn' }],
	creator: 'Parfumerie.vn',
	publisher: 'Parfumerie.vn',
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
		locale: 'en_US',
		url: 'https://yourcompany.com/knowledge',
		siteName: 'Parfumerie.vn',
		title: 'Knowledge Base | Parfumerie.vn',
		description: 'Comprehensive knowledge base with articles, guides, and resources to help you find answers and learn more about our products and services.',
		images: [
			{
				url: 'https://yourcompany.com/og-knowledge.jpg',
				width: 1200,
				height: 630,
				alt: 'Knowledge Base - Parfumerie.vn',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Knowledge Base | Parfumerie.vn',
		description: 'Comprehensive knowledge base with articles, guides, and resources to help you find answers and learn more about our products and services.',
		images: ['https://yourcompany.com/og-knowledge.jpg'],
		creator: '@yourcompany',
	},
	alternates: {
		canonical: 'https://yourcompany.com/knowledge',
	},
};

interface KnowledgeLayoutProps {
	children: React.ReactNode;
}

export default function KnowledgeLayout({ children }: KnowledgeLayoutProps) {
	return <div className="h-full w-full">{children}</div>;
}
