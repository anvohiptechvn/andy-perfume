import { parseAsArrayOf, parseAsBoolean, parseAsInteger, parseAsString } from 'nuqs';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './http';

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

export const SEARCH_PRODUCT_PARAMS = {
	search: parseAsString,
	brand: parseAsString,
	sort: parseAsString,
	priceRange: parseAsString,
	sex: parseAsString,
	isMaleExtract: parseAsBoolean,
	isFemaleExtract: parseAsBoolean,
	page: parseAsInteger.withDefault(DEFAULT_PAGE),
	limit: parseAsInteger.withDefault(DEFAULT_PER_PAGE),
};
