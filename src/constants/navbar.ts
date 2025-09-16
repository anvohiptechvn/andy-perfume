export interface NavSubItem {
	name: string;
	href: string;
}

export interface NavItem {
	name: string;
	link: string;
	children?: NavSubItem[];
}

export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterSection {
	title: string;
	links: FooterLink[];
}

export interface ContactInfo {
	company: string;
	license: string;
	address: string;
	phone: string;
	email: string;
}

export const footerSections: FooterSection[] = [
	{
		title: 'Về Parfumerie',
		links: [
			{ label: 'Trang chủ', href: '/' },
			{ label: 'Giới thiệu', href: '/gioi-thieu' },
			{ label: 'Sản phẩm', href: '/san-pham' },
			{ label: 'Liên hệ', href: '/lien-he' },
		],
	},
	{
		title: 'Hướng dẫn',
		links: [
			{ label: 'Hướng dẫn mua hàng', href: '/chinh-sach-thanh-toan-va-huong-dan-mua-hang' },
			{ label: 'Hướng dẫn thanh toán', href: '/chinh-sach-thanh-toan-va-huong-dan-mua-hang' },
			{ label: 'Hướng dẫn kiểm hàng', href: '/chinh-sach-kiem-hang' },
			{ label: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung' },
		],
	},
	{
		title: 'Chính sách',
		links: [
			{ label: 'Chính sách mua hàng', href: '/chinh-sach-mua-hang' },
			{ label: 'Chính sách bảo mật thông tin', href: '/chinh-sach-bao-mat-thong-tin' },
			{ label: 'Chính sách giao hàng', href: '/chinh-sach-giao-hang' },
			{ label: 'Chính sách đổi trả - bảo hành', href: '/chinh-sach-doi-tra-bao-hanh' },
			{ label: 'Chính sách bảo mật thanh toán', href: '/chinh-sach-bao-mat-thanh-toan' },
		],
	},
	{
		title: 'Hỗ trợ',
		links: [
			{ label: 'Tìm kiếm', href: '/search' },
			{ label: 'Cộng tác viên', href: '' },
		],
	},
];
