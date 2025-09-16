'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SetValues, Values } from 'nuqs';

import { SEARCH_PRODUCT_PARAMS } from '@/types/perfume';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CategorySidebar from '@/components/feature/category/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

import brandJson from '@/data/brands/data.json' assert { type: 'json' };

const priceFilters = [
	{ label: 'Giá dưới 100.000đ', value: 'lt-100000' },
	{ label: '100.000đ - 200.000đ', value: 'gte-100000-lte-200000' },
	{ label: '200.000đ - 300.000đ', value: 'gte-200000-lte-300000' },
	{ label: '300.000đ - 500.000đ', value: 'gte-300000-lte-500000' },
	{ label: '500.000đ - 1.000.000đ', value: 'gte-500000-lte-1000000' },
	{ label: 'Giá trên 1.000.000đ', value: 'gt-1000000' },
];

export interface PerfumeFiltersProps {
	params: Values<typeof SEARCH_PRODUCT_PARAMS>;
	setParams: SetValues<typeof SEARCH_PRODUCT_PARAMS>;
}

const PerfumeFilters: React.FC<PerfumeFiltersProps> = ({ params, setParams }) => {
	const [temporarySearch, setTemporaySearch] = useState<string>('');
	const [localBrandSearch, setLocalBrandSearch] = useState<string>('');

	const filteredBrands = useMemo(() => {
		if (!localBrandSearch.trim()) return brandJson.data;

		const formatSearchValue = localBrandSearch.trim();

		return brandJson.data.filter(
			(br) => br.key.toLowerCase().includes(formatSearchValue.toLocaleLowerCase()) || br.label.toLowerCase().includes(formatSearchValue.toLocaleLowerCase()),
		);
	}, [localBrandSearch]);

	useEffect(() => {
		setLocalBrandSearch(params?.brand || '');
	}, [params?.brand]);

	return (
		<aside className="space-y-6">
			<aside className="border">
				{/* Title */}
				<div className="border-b p-2.5">
					<h2 className="text-lg font-bold uppercase">Bộ lọc</h2>
					<p className="text-[10px] md:text-xs">Giúp lọc nhanh sản phẩm bạn tìm kiếm</p>
				</div>

				{/* Brand Filter */}
				<div className="border-b px-2.5">
					<h3 className="py-2.5 text-base font-semibold">Thương hiệu</h3>
					<div className="relative">
						<Input
							placeholder="Tìm Thương hiệu"
							className="rounded-xs pr-10 shadow-none"
							value={temporarySearch}
							onChange={(e) => setTemporaySearch(e.target.value)}
						/>
						<button
							className="bg-primary-default absolute top-0 right-0 bottom-0 flex w-11 items-center justify-center p-1 text-white"
							onClick={() => setLocalBrandSearch(temporarySearch)}
						>
							<Search className="h-4 w-4" />
						</button>
					</div>
					<ScrollArea className="mt-2.5 h-36 pr-2 pb-2.5">
						<div className="space-y-2">
							{filteredBrands.map((brand) => (
								<div key={brand.key} className="flex items-center space-x-2">
									<Checkbox
										id={brand.key}
										className="rounded-none text-neutral-100 shadow-none"
										checked={Array.isArray(params?.brand) ? params.brand.includes(brand.key) : (params?.brand || '').split(',').includes(brand.key)}
										onCheckedChange={(checked) => {
											const currentBrands = Array.isArray(params?.brand) ? params.brand : (params?.brand || '').split(',').filter(Boolean);
											let newBrands: string[];
											if (checked) {
												newBrands = Array.from(new Set([...currentBrands, brand.key]));
											} else {
												newBrands = currentBrands.filter((b: string) => b !== brand.key);
											}
											setParams((prev) => ({
												...prev,
												brand: newBrands.length > 0 ? newBrands.join(',') : null,
											}));
										}}
									/>
									<Label htmlFor={brand.key} className="text-xs font-normal text-[#6F6F6F] md:text-sm">
										{brand.label}
									</Label>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>

				{/* Price Filter */}
				<div className="px-2.5">
					<h3 className="py-2.5 text-base font-semibold">Giá sản phẩm</h3>
					<ScrollArea className="mt-2.5 h-28 pr-2 pb-2.5">
						<div className="space-y-2">
							{priceFilters.map((filter) => (
								<div key={filter.value} className="flex items-center space-x-2">
									<Checkbox
										id={filter.value}
										className="rounded-none text-neutral-100 shadow-none"
										checked={params?.priceRange === filter.value}
										onCheckedChange={(checked) => {
											setParams((prev) => ({
												...prev,
												priceRange: checked ? filter.value : null,
											}));
										}}
									/>
									<Label htmlFor={filter.value} className="text-xs font-normal text-[#6F6F6F] md:text-sm">
										{filter.label}
									</Label>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</aside>

			<CategorySidebar displayedBlogs={false} />
		</aside>
	);
};

export default PerfumeFilters;
