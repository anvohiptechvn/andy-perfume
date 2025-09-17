import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Kiểm Hàng | Parfumerie.vn',
	description: 'Tìm hiểu về chính sách kiểm hàng của chúng tôi. Chúng tôi cam kết đảm bảo chất lượng sản phẩm và sự hài lòng của khách hàng khi nhận hàng.',
	keywords: ['chính sách kiểm hàng', 'kiểm tra sản phẩm', 'chất lượng sản phẩm', 'Parfumerie.vn'],
	authors: [{ name: 'Parfumerie.vn' }],
	openGraph: {
		title: 'Chính Sách Kiểm Hàng | Parfumerie.vn',
		description: 'Tìm hiểu về chính sách kiểm hàng của chúng tôi. Chúng tôi cam kết đảm bảo chất lượng sản phẩm và sự hài lòng của khách hàng khi nhận hàng.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Kiểm Hàng | Parfumerie.vn',
		description: 'Tìm hiểu về chính sách kiểm hàng của chúng tôi. Chúng tôi cam kết đảm bảo chất lượng sản phẩm và sự hài lòng của khách hàng khi nhận hàng.',
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
		canonical: '/chinh-sach-kiem-hang',
	},
};

export default function ProductValidationPolicyLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
