export interface NavSubItem {
	name: string;
	href: string;
}

export interface NavItem {
	name: string;
	href: string;
	submenu?: NavSubItem[];
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

export const routes: NavItem[] = [
	{ name: 'TRANG CHỦ', href: '/' },
	{ name: 'GIỚI THIỆU', href: '/about' },
	{
		name: 'THƯƠNG HIỆU',
		href: '/brands',
		submenu: [
			{ name: 'AFNAN', href: '/brands/afnan' },
			{ name: 'AMOUAGE', href: '/brands/amouage' },
			{ name: 'ARMAF', href: '/brands/armaf' },
			{ name: 'BURBERRY', href: '/brands/burberry' },
			{ name: 'CAROLINA HERRERA', href: '/brands/carolina-herrera' },
			{ name: 'CHANEL', href: '/brands/chanel' },
			{ name: 'CALVIN KLEIN', href: '/brands/calvin-klein' },
			{ name: 'CREED', href: '/brands/creed' },
			{ name: 'DIOR', href: '/brands/dior' },
			{ name: 'DIPTYQUE', href: '/brands/diptyque' },
			{ name: 'FREDERIC MALLE', href: '/brands/frederic-malle' },
			{ name: 'GIORGIO ARMANI', href: '/brands/giorgio-armani' },
			{ name: 'JO MALONE', href: '/brands/jo-malone' },
			{ name: 'JEAN PAUL GAULTIER', href: '/brands/jean-paul-gaultier' },
			{ name: 'KILIAN', href: '/brands/kilian' },
			{ name: 'LANCOME', href: '/brands/lancome' },
			{ name: 'MAISON MARGIELA', href: '/brands/maison-margiela' },
			{ name: 'MARC JACOBS', href: '/brands/marc-jacobs' },
			{ name: 'MAISON FRANCIS KURKDJIAN', href: '/brands/maison-francis-kurkdjian' },
			{ name: 'MONTALE', href: '/brands/montale' },
			{ name: 'ROJA DOVE', href: '/brands/roja-dove' },
			{ name: 'SALVATORE FERRAGAMO', href: '/brands/salvatore-ferragamo' },
			{ name: 'VERSACE', href: '/brands/versace' },
			{ name: 'YSL', href: '/brands/ysl' },
			{ name: 'TOM FORD', href: '/brands/tom-ford' },
			{ name: 'MONT BLANC', href: '/brands/mont-blanc' },
			{ name: 'MOSCHINO', href: '/brands/moschino' },
			{ name: 'CLIVE CHRISTIAN', href: '/brands/clive-christian' },
			{ name: 'ALREHAB', href: '/brands/alrehab' },
			{ name: 'ALFRED DUNHILL', href: '/brands/alfred-dunhill' },
			{ name: 'XERJOFF', href: '/brands/xerjoff' },
			{ name: 'DAVIDOFF', href: '/brands/davidoff' },
			{ name: 'LATTAFA', href: '/brands/lattafa' },
			{ name: 'FLORIS', href: '/brands/floris' },
			{ name: 'PARFUMS de MARLY', href: '/brands/parfums-de-marly' },
			{ name: 'MANCERA', href: '/brands/mancera' },
			{ name: 'DIESEL', href: '/brands/diesel' },
			{ name: "ETAT LIBRE D'ORANGE", href: '/brands/etat-libre-dorange' },
			{ name: 'NISHANE', href: '/brands/nishane' },
			{ name: 'FRANCK BOCLET', href: '/brands/franck-boclet' },
			{ name: 'ATELIER DES ORS', href: '/brands/atelier-des-ors' },
			{ name: 'CHLOÉ', href: '/brands/chloe' },
			{ name: 'LOUIS VUITTON', href: '/brands/louis-vuitton' },
			{ name: "VICTORIA'S SECRET", href: '/brands/victorias-secret' },
			{ name: 'LALIQUE', href: '/brands/lalique' },
			{ name: 'NAUTICA', href: '/brands/nautica' },
			{ name: 'THOMAS KOSMALA', href: '/brands/thomas-kosmala' },
			{ name: "PENHALIGON'S", href: '/brands/penhaligons' },
			{ name: 'TOMMY HILFIGER', href: '/brands/tommy-hilfiger' },
			{ name: 'RALPH LAUREN', href: '/brands/ralph-lauren' },
			{ name: 'JIMMY CHOO', href: '/brands/jimmy-choo' },
			{ name: 'JULIETTE HAS A GUN', href: '/brands/juliette-has-a-gun' },
			{ name: 'THE MERCHANT OF VENICE', href: '/brands/the-merchant-of-venice' },
			{ name: 'BOND NO.9', href: '/brands/bond-no-9' },
			{ name: 'NACHO VIDAL', href: '/brands/nacho-vidal' },
			{ name: 'MISSONI', href: '/brands/missoni' },
			{ name: 'ORTO PARISI', href: '/brands/orto-parisi' },
			{ name: 'MAD ET LEN', href: '/brands/mad-et-len' },
			{ name: 'ATTAR COLLECTION', href: '/brands/attar-collection' },
			{ name: 'THEODOROS KALOTINIS', href: '/brands/theodoros-kalotinis' },
			{ name: 'CHASING SCENTS', href: '/brands/chasing-scents' },
			{ name: 'MAURER & WIRTZ', href: '/brands/maurer-wirtz' },
			{ name: 'FLAVIA', href: '/brands/flavia' },
			{ name: 'ALEXANDRIA FRAGRANCES', href: '/brands/alexandria-fragrances' },
			{ name: 'MAISON MATINE', href: '/brands/maison-matine' },
			{ name: 'MARIE JEANNE', href: '/brands/marie-jeanne' },
			{ name: 'GHALA ZAYED', href: '/brands/ghala-zayed' },
			{ name: 'DSQUARED2', href: '/brands/dsquared2' },
			{ name: 'GUERLAIN', href: '/brands/guerlain' },
			{ name: 'Giardini Di Toscana', href: '/brands/giardini-di-toscana' },
			{ name: 'INTINIO PARFUMS PRIVES', href: '/brands/intinio-parfums-prives' },
			{ name: 'BYREDO', href: '/brands/byredo' },
			{ name: 'PRADA', href: '/brands/prada' },
			{ name: 'LOEWE', href: '/brands/loewe' },
			{ name: 'LES LIQUIDES IMAGINAIRES', href: '/brands/les-liquides-imaginaires' },
			{ name: 'BVLGARI', href: '/brands/bvlgari' },
			{ name: 'DOLCE & GABBANA', href: '/brands/dolce-gabbana' },
			{ name: 'GUCCI', href: '/brands/gucci' },
			{ name: 'LE LABO', href: '/brands/le-labo' },
			{ name: 'NARCISO RODRIGUEZ', href: '/brands/narciso-rodriguez' },
			{ name: 'HERMES', href: '/brands/hermes' },
			{ name: 'PACO RANBANNE', href: '/brands/paco-ranbanne' },
			{ name: 'SERGE LUTENS', href: '/brands/serge-lutens' },
			{ name: 'AL HARAMAIN', href: '/brands/al-haramain' },
			{ name: 'KENZO', href: '/brands/kenzo' },
			{ name: 'NASOMATTO', href: '/brands/nasomatto' },
			{ name: 'VIKTOR & ROLF', href: '/brands/viktor-rolf' },
			{ name: 'MCM', href: '/brands/mcm' },
			{ name: 'BUTTERFLY THAI PERFUME', href: '/brands/butterfly-thai-perfume' },
			{ name: 'VALENTINO', href: '/brands/valentino' },
			{ name: 'MASQUE MILANO', href: '/brands/masque-milano' },
			{ name: 'THIERRY MUGLER', href: '/brands/thierry-mugler' },
			{ name: 'ELIZABETH ARDEN', href: '/brands/elizabeth-arden' },
		],
	},
	{
		name: 'NƯỚC HOA',
		href: '/perfume',
		submenu: [
			{ name: 'Nước hoa nam', href: '/perfume?sex=men' },
			{ name: 'Nước hoa nữ', href: '/perfume?sex=women' },
			{ name: 'Nước hoa unisex', href: '/perfume?sex=unisex' },
		],
	},
	{
		name: 'NƯỚC HOA CHIẾT',
		href: '/extract',
		submenu: [
			{ name: 'Nước hoa chiết Nam', href: '/perfume?sex=men' },
			{ name: 'Nước hoa chiết Nữ', href: '/perfume?sex=women' },
		],
	},
	{ name: 'KIẾN THỨC', href: '/knowledge' },
	{ name: 'BLOG', href: '/blog' },
	{ name: 'LIÊN HỆ', href: '/contact' },
];

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

export const contactInfo: ContactInfo = {
	company: 'Hộ Kinh doanh PARFUMERIE',
	license: 'Số ĐKKD 41H8185878 cấp ngày 24/3/2022 tại UBND Quận 8, TPHCM',
	address: 'Địa chỉ: 1F Quốc lộ 50, P.5, Q.8, TPHCM',
	phone: 'Điện thoại: 0888070308',
	email: 'Email: info@parfumerie.vn',
};
