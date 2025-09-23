import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us | Andy Perfume',
	description: "Get in touch with our team. Contact us for inquiries, support, or business opportunities. We're here to help you succeed.",
	keywords: ['contact', 'support', 'inquiry', 'business', 'help', 'customer service'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Contact Us | Andy Perfume',
		description: 'Get in touch with our team. Contact us for inquiries, support, or business opportunities.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contact Us | Andy Perfume',
		description: 'Get in touch with our team. Contact us for inquiries, support, or business opportunities.',
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
		canonical: '/lien-he',
	},
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
