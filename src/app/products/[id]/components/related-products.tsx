'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Perfume } from '@/types/perfume';

import PerfumeCard from '@/components/feature/perfume/perfume-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RelatedProductsProps {
	products: Perfume[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	return (
		<div className="border p-2.5">
			<h2 className="mb-3 text-xl font-medium text-[#323c3f] md:text-[22px]">Sản phẩm liên quan</h2>

			{/* ✅ Custom Navigation Buttons */}

			<button
				ref={prevRef}
				className="absolute top-1/2 left-0 h-14 -translate-y-1/2 cursor-pointer rounded-[6px] border border-neutral-100 bg-white px-2 text-neutral-600 opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-neutral-50"
			>
				<ChevronLeft size={18} />
			</button>

			<button
				ref={nextRef}
				className="absolute top-1/2 right-0 h-14 -translate-y-1/2 cursor-pointer rounded-[6px] border border-neutral-100 bg-white px-2 text-neutral-600 opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-neutral-50"
			>
				<ChevronRight size={18} />
			</button>

			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onBeforeInit={(swiper) => {
					// ✅ Connect custom buttons before swiper initializes
					if (swiper.params.navigation) {
						const navigation = swiper.params.navigation;
						if (typeof navigation !== 'boolean') {
							navigation.prevEl = prevRef.current;
							navigation.nextEl = nextRef.current;
						}
					}
				}}
				breakpoints={{
					320: { slidesPerView: 1.2 },
					640: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 4 },
					1280: { slidesPerView: 5 },
					1440: { slidesPerView: 6 },
				}}
			>
				{products.map((product, idx) => (
					<SwiperSlide key={idx}>
						<PerfumeCard perfume={product} className="border-0" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default RelatedProducts;
