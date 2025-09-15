'use client';

import { useMemo, useState } from 'react';

import { Perfume } from '@/types/perfume';

import PerfumeFilters from '@/components/feature/perfume/filters';
import PerfumeListView from '@/components/feature/perfume/list-grid';

import perfumes from '@/data/perfume/men.json' assert { type: 'json' };

export default function BrandPage() {
	const [sort, setSort] = useState('new');

	const perfumesData = useMemo<Perfume[]>(() => {
		let sortedPerfumes = [...perfumes];
		switch (sort) {
			case 'new':
				// Default: no sorting, keep as is (or could sort by id descending if "new" means latest)
				break;
			case 'low-high':
				sortedPerfumes.sort((a, b) => a.price.from - b.price.from);
				break;
			case 'high-low':
				sortedPerfumes.sort((a, b) => b.price.from - a.price.from);
				break;
		}
		return sortedPerfumes;
	}, [sort]);

	return (
		<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[280px_1fr]">
			<PerfumeFilters dispatch={() => {}} filterState={{ brands: [], prices: [] }} />
			<PerfumeListView perfumes={perfumesData} sort={sort} setSort={setSort} />
		</div>
	);
}
