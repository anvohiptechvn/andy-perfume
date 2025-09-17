import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Điều Khoản Sử Dụng | Andy Perfume',
	description: 'Xem chi tiết các điều khoản sử dụng dịch vụ tại Andy Perfume. Chúng tôi cam kết minh bạch và bảo vệ quyền lợi khách hàng.',
	keywords: ['điều khoản sử dụng', 'Andy Perfume', 'quy định', 'chính sách', 'khách hàng'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Điều Khoản Sử Dụng | Andy Perfume',
		description: 'Xem chi tiết các điều khoản sử dụng dịch vụ tại Andy Perfume.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Điều Khoản Sử Dụng | Andy Perfume',
		description: 'Xem chi tiết các điều khoản sử dụng dịch vụ tại Andy Perfume.',
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
