import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Đổi Trả & Bảo Hành | Andy Perfume',
	description:
		'Tìm hiểu về chính sách đổi trả và bảo hành của chúng tôi. Chúng tôi cam kết mang đến cho khách hàng sự hài lòng với các chính sách hỗ trợ đổi trả và bảo hành minh bạch, nhanh chóng.',
	keywords: ['chính sách đổi trả', 'bảo hành', 'đổi trả sản phẩm', 'hỗ trợ khách hàng', 'Andy Perfume'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Chính Sách Đổi Trả & Bảo Hành | Andy Perfume',
		description:
			'Tìm hiểu về chính sách đổi trả và bảo hành của chúng tôi. Chúng tôi cam kết mang đến cho khách hàng sự hài lòng với các chính sách hỗ trợ đổi trả và bảo hành minh bạch, nhanh chóng.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Đổi Trả & Bảo Hành | Andy Perfume',
		description:
			'Tìm hiểu về chính sách đổi trả và bảo hành của chúng tôi. Chúng tôi cam kết mang đến cho khách hàng sự hài lòng với các chính sách hỗ trợ đổi trả và bảo hành minh bạch, nhanh chóng.',
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
		canonical: '/chinh-sach-doi-tra-bao-hanh',
	},
};

export default function ReturnAssurancePolicyLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
