import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Mua Hàng | Andy Perfume',
	description: 'Tìm hiểu chính sách mua hàng của Andy Perfume. Thông tin chi tiết về quy trình đặt hàng, thanh toán và hỗ trợ khách hàng.',
	keywords: ['chính sách mua hàng', 'đặt hàng', 'thanh toán', 'Andy Perfume', 'hỗ trợ khách hàng'],
	authors: [{ name: 'Andy Perfume' }],
	openGraph: {
		title: 'Chính Sách Mua Hàng | Andy Perfume',
		description: 'Tìm hiểu chính sách mua hàng của Andy Perfume. Thông tin chi tiết về quy trình đặt hàng, thanh toán và hỗ trợ khách hàng.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Mua Hàng | Andy Perfume',
		description: 'Tìm hiểu chính sách mua hàng của Andy Perfume. Thông tin chi tiết về quy trình đặt hàng, thanh toán và hỗ trợ khách hàng.',
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
		canonical: '/chinh-sach-mua-hang',
	},
};

export default function PurchasePolicyLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
