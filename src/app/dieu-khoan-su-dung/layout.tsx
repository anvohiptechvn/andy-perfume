import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Điều Khoản Sử Dụng | Parfumerie.vn',
	description: 'Xem chi tiết các điều khoản sử dụng dịch vụ tại Parfumerie.vn. Chúng tôi cam kết minh bạch và bảo vệ quyền lợi khách hàng.',
	keywords: ['điều khoản sử dụng', 'Parfumerie.vn', 'quy định', 'chính sách', 'khách hàng'],
	authors: [{ name: 'Parfumerie.vn' }],
	openGraph: {
		title: 'Điều Khoản Sử Dụng | Parfumerie.vn',
		description: 'Xem chi tiết các điều khoản sử dụng dịch vụ tại Parfumerie.vn.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Điều Khoản Sử Dụng | Parfumerie.vn',
		description: 'Xem chi tiết các điều khoản sử dụng dịch vụ tại Parfumerie.vn.',
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
		canonical: '/dieu-khoan-su-dung',
	},
};

export default function UsageNoteLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
