// const BrandPage = () => {
// 	return <div className="container mx-auto">BrandPage</div>;
// };

// export default BrandPage;

'use client';

import { useState } from 'react';
import { Grid, List } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import PerfumeCard from '@/components/feature/perfume/perfume-card';
import PerfumeFilters from '@/components/feature/perfume/filters';

import perfumes from '@/data/perfume/men.json' assert { type: 'json' };

export default function BrandPage() {
	const [view, setView] = useState<'grid' | 'list'>('grid');
	const [sort, setSort] = useState('new');

	return (
		<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[280px_1fr]">
			<PerfumeFilters />

			{/* Product Grid */}
			<main className="space-y-6 border">
				{/* Sort & View Controls */}
				<div className="m-2.5 mb-0 flex flex-wrap items-center justify-between gap-4 border-b pb-2.5">
					<div className="flex items-center gap-6">
						<span className="font-medium">Xếp theo:</span>
						<RadioGroup value={sort} onValueChange={setSort} className="flex gap-4">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="new" id="new" />
								<Label htmlFor="new">Hàng mới</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="low-high" id="low-high" />
								<Label htmlFor="low-high">Giá thấp đến cao</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="high-low" id="high-low" />
								<Label htmlFor="high-low">Giá cao xuống thấp</Label>
							</div>
						</RadioGroup>
					</div>

					{/* View toggle */}
					<div className="flex gap-2">
						<button className={`p-2 ${view === 'grid' ? 'bg-gray-200' : ''}`} onClick={() => setView('grid')}>
							<Grid className="h-4 w-4" />
						</button>
						<button className={`p-2 ${view === 'list' ? 'bg-gray-200' : ''}`} onClick={() => setView('list')}>
							<List className="h-4 w-4" />
						</button>
					</div>
				</div>

				{/* Product Items */}
				<div className={view === 'grid' ? 'grid grid-cols-2 md:grid-cols-4' : 'space-y-4'}>
					{perfumes.map((perfume) => (
						<PerfumeCard perfume={perfume} className="border-0" />
					))}
				</div>
			</main>
		</div>
	);
}
