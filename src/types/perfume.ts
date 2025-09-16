export type Perfume = {
	name: string;
	slug: string;
	brand: string;
	createdAt: string;
	sex: string; /// 'male' | 'female' | 'unisex';
	isMaleExtract: boolean;
	isFemaleExtract: boolean;
	price: {
		from: number;
		to: number;
	};
	image: string;
	detailImages: string[];
	description: string;
	content: string;
};
