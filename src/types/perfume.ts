export type Perfume = {
	id: number;
	name: string;
	price: {
		from: number;
		to: number;
	};
	image: string;
	description: string;
};
