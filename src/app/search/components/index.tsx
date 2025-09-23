'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import products from '@/data/products/data.json' assert { type: 'json' };

import PerfumeCard from '@/components/feature/perfume/perfume-card';

const SearchPage = () => {
	const searchParams = useSearchParams();

	const [searchVal, setSearchVal] = useState<string>('');

	const query = useMemo<string>(() => (searchParams.get('q')?.toLowerCase() || '').trim().toLowerCase(), [searchParams]);

	const filteredProducts = useMemo(
		() => products.filter((product) => product.name.toLowerCase().includes(query) || (product.brand?.toLowerCase().includes(query) ?? false)),
		[query],
	);

	return (
		<section className="container mx-auto my-6 flex flex-col gap-6 border px-1.5 md:px-0">
			{filteredProducts.length > 0 ? (
				<div className="flex flex-col gap-6 px-3 py-6">
					<h3 className="text-center text-lg text-[20px] font-medium">Có {filteredProducts.length} kết quả tìm kiếm phù hợp</h3>

					<div className="grid grid-cols-2 md:grid-cols-4">
						{filteredProducts.map((perfume, idx) => (
							<PerfumeCard key={idx} perfume={perfume} className="border-0" />
						))}
					</div>
				</div>
			) : (
				<div className="flex h-full w-full flex-col items-center justify-center gap-3 py-10">
					<h3 className="text-lg text-[20px] font-medium">Không tìm thấy bất kỳ kết quả nào với từ khóa trên.</h3>
					<p>Vui lòng nhập từ khóa tìm kiếm khác</p>
					<div className="relative h-full w-full md:w-[500px]">
						<Input
							type="text"
							placeholder="Bạn cần tìm gì hôm nay?"
							className="h-full rounded-sm bg-white py-2 pr-10 pl-2 shadow-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
							value={searchVal}
							onChange={(e) => setSearchVal(e.target.value)}
						/>
						<a
							href={`/search?q=${searchVal}`}
							className="absolute top-1/2 right-3 -translate-y-1/2"
							onClick={(e) => {
								if (!searchVal.trim()) {
									e.preventDefault();
								}
							}}
						>
							<Search className="h-4 w-4 transform text-gray-400" />
						</a>
					</div>
				</div>
			)}
		</section>
	);
};

export default SearchPage;
