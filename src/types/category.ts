export interface Category {
	name: string;
	link: string;
	children?: Category[]; // optional, since not all items have submenus
}

interface MenuConfig {
	categories: Category[];
}
