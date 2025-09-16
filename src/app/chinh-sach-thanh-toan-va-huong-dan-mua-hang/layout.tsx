import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Thanh Toán & Hướng Dẫn Mua Hàng | Parfumerie.vn',
	description:
		'Tìm hiểu chi tiết về chính sách thanh toán và hướng dẫn mua hàng tại Parfumerie.vn. Đảm bảo trải nghiệm mua sắm an toàn, tiện lợi và minh bạch cho khách hàng.',
	keywords: ['chính sách thanh toán', 'hướng dẫn mua hàng', 'Parfumerie.vn', 'mua sắm', 'thanh toán', 'hỗ trợ khách hàng'],
	authors: [{ name: 'Parfumerie.vn' }],
	openGraph: {
		title: 'Chính Sách Thanh Toán & Hướng Dẫn Mua Hàng | Parfumerie.vn',
		description: 'Tìm hiểu chi tiết về chính sách thanh toán và hướng dẫn mua hàng tại Parfumerie.vn.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Thanh Toán & Hướng Dẫn Mua Hàng | Parfumerie.vn',
		description: 'Tìm hiểu chi tiết về chính sách thanh toán và hướng dẫn mua hàng tại Parfumerie.vn.',
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
		canonical: '/chinh-sach-thanh-toan-va-huong-dan-mua-hang',
	},
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
