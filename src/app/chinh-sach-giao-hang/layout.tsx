import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Giao Hàng | Parfumerie.vn',
	description: 'Tìm hiểu về chính sách giao hàng của chúng tôi. Chúng tôi cam kết giao hàng nhanh chóng, an toàn và đúng hẹn đến khách hàng.',
	keywords: ['chính sách giao hàng', 'giao hàng nhanh', 'giao hàng an toàn', 'vận chuyển', 'Parfumerie.vn'],
	authors: [{ name: 'Parfumerie.vn' }],
	openGraph: {
		title: 'Chính Sách Giao Hàng | Parfumerie.vn',
		description: 'Tìm hiểu về chính sách giao hàng của chúng tôi. Chúng tôi cam kết giao hàng nhanh chóng, an toàn và đúng hẹn đến khách hàng.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Giao Hàng | Parfumerie.vn',
		description: 'Tìm hiểu về chính sách giao hàng của chúng tôi. Chúng tôi cam kết giao hàng nhanh chóng, an toàn và đúng hẹn đến khách hàng.',
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
		canonical: '/chinh-sach-giao-hang',
	},
};

export default function ShippingPolicyLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
