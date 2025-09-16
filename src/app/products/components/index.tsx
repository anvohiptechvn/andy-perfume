'use client';

import { useEffect, useMemo, useState } from 'react';
import { useQueryStates } from 'nuqs';

import { Perfume, SEARCH_PRODUCT_PARAMS } from '@/types/perfume';

import PerfumeFilters from '@/components/feature/perfume/filters';
import PerfumeListView from '@/components/feature/perfume/list-grid';
import { CustomPagination } from '@/components/ui/custom-pagination';

import products from '@/data/products/data.json' assert { type: 'json' };

import useMounted from '@/hooks/useMounted';

export default function ProductPage() {
	const mounted = useMounted();
	const [params, setParams] = useQueryStates(SEARCH_PRODUCT_PARAMS);
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
				data = data.filter((p) => (params?.brand || '').split(',').includes(p.brand.toLowerCase()));
			}

			// Filter by priceRange (assume format "min-max")
			if (params.priceRange) {
				const value = params.priceRange;
				data = data.filter((p) => {
					const priceFrom = p.price.from;
					if (value.startsWith('lt-')) {
						const num = Number(value.replace('lt-', ''));
						return priceFrom < num;
					}
					if (value.startsWith('gt-')) {
						const num = Number(value.replace('gt-', ''));
						return priceFrom > num;
					}
					if (value.startsWith('gte-') && value.includes('-lte-')) {
						const [gtePart, ltePart] = value.split('-lte-');
						const min = Number(gtePart.replace('gte-', ''));
						const max = Number(ltePart);
						return priceFrom >= min && priceFrom <= max;
					}
					return true;
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

	if (!mounted) return null;

	return (
		<div className="container mx-auto grid grid-cols-1 gap-6 px-1.5 py-4 md:grid-cols-[280px_1fr] md:px-0">
			<PerfumeFilters params={params} setParams={setParams} />

			<main className="space-y-6 border">
				<PerfumeListView perfumes={displayedProducts} sort={params?.sort || 'new'} setSort={(sort) => setParams({ ...params, sort })} />

				<div className="my-6">
					<CustomPagination currentPage={params.page} totalPages={totalPage} onPageChange={(page) => setParams({ ...params, page })} />
				</div>
			</main>
		</div>
	);
}
