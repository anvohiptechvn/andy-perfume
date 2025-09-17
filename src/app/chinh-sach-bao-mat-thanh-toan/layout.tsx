import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Bảo Mật Thanh Toán | Parfumerie.vn',
	description:
		'Tìm hiểu về chính sách bảo mật thanh toán của chúng tôi. Chúng tôi cam kết bảo vệ thông tin và giao dịch của khách hàng một cách an toàn và bảo mật.',
	keywords: ['bảo mật thanh toán', 'chính sách bảo mật', 'thanh toán an toàn', 'thông tin khách hàng', 'Parfumerie.vn'],
	authors: [{ name: 'Parfumerie.vn' }],
	openGraph: {
		title: 'Chính Sách Bảo Mật Thanh Toán | Parfumerie.vn',
		description:
			'Tìm hiểu về chính sách bảo mật thanh toán của chúng tôi. Chúng tôi cam kết bảo vệ thông tin và giao dịch của khách hàng một cách an toàn và bảo mật.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Bảo Mật Thanh Toán | Parfumerie.vn',
		description:
			'Tìm hiểu về chính sách bảo mật thanh toán của chúng tôi. Chúng tôi cam kết bảo vệ thông tin và giao dịch của khách hàng một cách an toàn và bảo mật.',
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
		canonical: '/chinh-sach-bao-mat-thanh-toan',
	},
};

export default function PaymentSecurityPolicyLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
