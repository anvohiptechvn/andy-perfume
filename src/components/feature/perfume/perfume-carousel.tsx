import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Perfume } from '@/types/perfume';

import PerfumeCard from '@/components/feature/perfume/perfume-card';

interface PerfumeCarouselProps {
	perfumes: Perfume[];
}

const PerfumeCarousel: React.FC<PerfumeCarouselProps> = ({ perfumes }) => {
	const visibleCount = 10; // items per page
	const [startIndex, setStartIndex] = useState(0);

	const handlePrev = () => {
		setStartIndex((prev) => prev - 1);
	};

	const handleNext = () => {
		setStartIndex((prev) => prev + 1);
	};

	const currentItems = useMemo(() => {
		const results = perfumes.slice(startIndex, startIndex + visibleCount + 1);
		const removeIdx = Math.floor((startIndex + visibleCount) / 2) + 1;
		results.splice(removeIdx, 1);
		return results;
	}, [perfumes, startIndex, visibleCount]);

	return (
		<div className="group/carousel relative w-full">
			{/* Responsive Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{currentItems.map((perfume) => (
					<PerfumeCard key={perfume.id} perfume={perfume} />
				))}
			</div>

			{startIndex > 0 && (
				<button
					onClick={handlePrev}
					className="absolute top-1/2 left-0 h-14 -translate-y-1/2 cursor-pointer rounded-[6px] border border-neutral-100 bg-white px-2 text-neutral-600 opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-neutral-50"
				>
					<ChevronLeft size={18} />
				</button>
			)}
			{startIndex + visibleCount === 10 && (
				<button
					onClick={handleNext}
					className="absolute top-1/2 right-0 h-14 -translate-y-1/2 cursor-pointer rounded-[6px] border border-neutral-100 bg-white px-2 text-neutral-600 opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-neutral-50"
				>
					<ChevronRight size={18} />
				</button>
			)}
		</div>
	);
};

export default PerfumeCarousel;
