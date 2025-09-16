'use client';

import { useEffect, useMemo, useState } from 'react';
import { parseAsBoolean, parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '@/types/http';
import { Perfume } from '@/types/perfume';

import PerfumeFilters from '@/components/feature/perfume/filters';
import PerfumeListView from '@/components/feature/perfume/list-grid';
import { CustomPagination } from '@/components/ui/custom-pagination';

import products from '@/data/products/data.json' assert { type: 'json' };

const SEARCH_PARAMS = {
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

export default function ProductPage() {
	const [params, setParams] = useQueryStates(SEARCH_PARAMS);
	const [filteredProducts, setFilteredProducts] = useState<Perfume[]>([]);

	useEffect(() => {
		const fetchingProducts = async () => {
			let data = [...products] as Perfume[];

			// Filter by search
			if (params.search) {
				const searchLower = params.search.toLowerCase();
				data = data.filter((p) => p.name.toLowerCase().includes(searchLower) || (p.brand?.toLowerCase().includes(searchLower) ?? false));
			}

			// Filter by brand
			if (params.brand) {
				data = data.filter((p) => p.brand === params.brand);
			}

			// Filter by priceRange (assume format "min-max")
			if (params.priceRange) {
				const [min, max] = params.priceRange.split('-').map(Number);
				data = data.filter((p) => {
					const price = p.price.from;
					return (!isNaN(min) ? price >= min : true) && (!isNaN(max) ? price <= max : true);
				});
			}

			// Filter by sex
			if (params.sex) {
				console.info('sex', params.sex);
				data = data.filter((p) => p.sex === params.sex);
				console.info('data', data);
			}

			// Filter by isMaleExtract
			if (params.isMaleExtract) {
				data = data.filter((p) => p.isMaleExtract);
			}

			// Filter by isFemaleExtract
			if (params.isFemaleExtract) {
				data = data.filter((p) => p.isFemaleExtract);
			}

			// Sort
			switch (params.sort) {
				case 'low-high':
					data.sort((a, b) => a.price.from - b.price.from);
					break;
				case 'high-low':
					data.sort((a, b) => b.price.from - a.price.from);
					break;
				default:
					break;
			}

			setTimeout(() => {
				setFilteredProducts(data);
			}, 300);
		};

		fetchingProducts();
	}, [params]);

	const displayedProducts = useMemo<Perfume[]>(
		() => filteredProducts.slice((params.page - 1) * params.limit, params.page * params.limit),
		[filteredProducts, params],
	);

	const totalPage = useMemo<number>(() => Math.ceil(filteredProducts.length / params.limit), [filteredProducts.length, params.limit]);

	return (
		<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[280px_1fr]">
			<PerfumeFilters dispatch={() => {}} filterState={{ brands: [], prices: [] }} />

			<main className="space-y-6 border">
				<PerfumeListView perfumes={displayedProducts} sort={params?.sort || 'new'} setSort={(sort) => setParams({ ...params, sort })} />

				<div className="my-6">
					<CustomPagination currentPage={params.page} totalPages={totalPage} onPageChange={(page) => setParams({ ...params, page })} />
				</div>
			</main>
		</div>
	);
}
