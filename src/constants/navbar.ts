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
			{ label: 'Hướng dẫn mua hàng', href: '#' },
			{ label: 'Hướng dẫn thanh toán', href: '#' },
			{ label: 'Hướng dẫn kiểm hàng', href: '#' },
			{ label: 'Điều khoản sử dụng', href: '#' },
		],
	},
	{
		title: 'Chính sách',
		links: [
			{ label: 'Chính sách mua hàng', href: '#' },
			{ label: 'Chính sách bảo mật thông tin', href: '#' },
			{ label: 'Chính sách giao hàng', href: '#' },
			{ label: 'Chính sách đổi trả - bảo hành', href: '#' },
			{ label: 'Chính sách bảo mật thanh toán', href: '#' },
		],
	},
	{
		title: 'Hỗ trợ',
		links: [
			{ label: 'Tìm kiếm', href: '#' },
			{ label: 'Đăng nhập', href: '#' },
			{ label: 'Đăng ký', href: '#' },
			{ label: 'Cộng tác viên', href: '#' },
		],
	},
];
