import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Knowledge Base | Andy Perfume',
	description: 'Comprehensive knowledge base with articles, guides, and resources to help you find answers and learn more about our products and services.',
	keywords: ['knowledge base', 'help center', 'documentation', 'guides', 'tutorials', 'FAQ', 'support'],
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
		locale: 'en_US',
		url: 'https://yourcompany.com/knowledge',
		siteName: 'Andy Perfume',
		title: 'Knowledge Base | Andy Perfume',
		description: 'Comprehensive knowledge base with articles, guides, and resources to help you find answers and learn more about our products and services.',
		images: [
			{
				url: 'https://yourcompany.com/og-knowledge.jpg',
				width: 1200,
				height: 630,
				alt: 'Knowledge Base - Andy Perfume',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Knowledge Base | Andy Perfume',
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
