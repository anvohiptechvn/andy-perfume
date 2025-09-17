import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Chính Sách Bảo Mật Thông Tin | Parfumerie.vn',
	description: 'Tìm hiểu chính sách bảo mật thông tin của Parfumerie.vn. Cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng.',
	keywords: ['chính sách bảo mật', 'bảo mật thông tin', 'Parfumerie.vn', 'quyền riêng tư', 'thông tin cá nhân'],
	authors: [{ name: 'Parfumerie.vn' }],
	openGraph: {
		title: 'Chính Sách Bảo Mật Thông Tin | Parfumerie.vn',
		description: 'Tìm hiểu chính sách bảo mật thông tin của Parfumerie.vn. Cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng.',
		type: 'website',
		locale: 'vi_VN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chính Sách Bảo Mật Thông Tin | Parfumerie.vn',
		description: 'Tìm hiểu chính sách bảo mật thông tin của Parfumerie.vn. Cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng.',
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
		canonical: '/chinh-sach-bao-mat-thong-tin',
	},
};

export default function InformationSecurityLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
