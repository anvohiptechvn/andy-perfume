import { Search } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CategorySidebar from '@/components/feature/category/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

const brands = ['Xerjoff', 'Butterfly Thai Perfume', 'Missoni', 'Maison Martin Margiela'];
const priceFilters = ['Giá dưới 100.000đ', '100.000đ - 200.000đ', '200.000đ - 300.000đ', '300.000đ - 500.000đ'];

const PerfumeFilters = () => {
	return (
		<aside className="space-y-6">
			<aside className="border">
				{/* Title */}
				<div className="border-b p-2.5">
					<h2 className="text-lg font-bold uppercase">Bộ lọc</h2>
					<p className="text-sm text-gray-500">Giúp lọc nhanh sản phẩm bạn tìm kiếm</p>
				</div>

				{/* Brand Filter */}
				<div className="border-b px-2.5">
					<h3 className="py-2.5 text-base font-semibold">Thương hiệu</h3>
					<div className="relative">
						<Input placeholder="Tìm Thương hiệu" className="rounded-xs pr-10 shadow-none" />
						<button className="absolute top-1/2 right-2 -translate-y-1/2 rounded bg-green-900 p-1 text-white">
							<Search className="h-4 w-4" />
						</button>
					</div>
					<ScrollArea className="mt-2.5 h-36 pr-2">
						<div className="space-y-2">
							{brands.map((brand) => (
								<div key={brand} className="flex items-center space-x-2">
									<Checkbox id={brand} className="rounded-none text-neutral-100 shadow-none" />
									<Label htmlFor={brand} className="text-xs font-normal text-[#6F6F6F] md:text-sm">
										{brand}
									</Label>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>

				{/* Price Filter */}
				<div className="px-2.5">
					<h3 className="py-2.5 text-base font-semibold">Giá sản phẩm</h3>
					<ScrollArea className="mt-2.5 h-28 pr-2">
						<div className="space-y-2">
							{priceFilters.map((filter) => (
								<div key={filter} className="flex items-center space-x-2">
									<Checkbox id={filter} className="rounded-none text-neutral-100 shadow-none" />
									<Label htmlFor={filter} className="text-xs font-normal text-[#6F6F6F] md:text-sm">
										{filter}
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
