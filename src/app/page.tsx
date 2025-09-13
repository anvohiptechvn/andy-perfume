'use client';

import { useMemo } from 'react';

import { Perfume } from '@/types/perfume';

import SlideSwiper from '@/components/ui/swiper';
import Banner from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import RightPointerIcon from '@/components/icons/right-pointer';
import PerfumeCarousel from '@/components/feature/perfume/perfume-carousel';
import Blogs from '@/components/feature/home/blog-section';

import menPerfumes from '@/data/perfume/men.json' assert { type: 'json' };
import womenPerfumes from '@/data/perfume/women.json' assert { type: 'json' };
import unisexPerfumes from '@/data/perfume/unisex.json' assert { type: 'json' };

export default function Home() {
	const images = [
		'/images/slide/slider_1.webp',
		'/images/slide/slider_2.webp',
		'/images/slide/slider_3.webp',
		'/images/slide/slider_4.webp',
		'/images/slide/slider_5.webp',
	];

	const perfumeGroups = useMemo(
		() => [
			{
				key: 'men',
				title: 'NƯỚC HOA NAM',
				subtitle: 'Nước hoa Nam',
				imageUrl: 'https://bizweb.dktcdn.net/100/429/123/themes/824870/assets/sec_group_product_banner_1.jpg?1755238846140',
				perfumes: menPerfumes as Perfume[],
			},
			{
				key: 'women',
				title: 'NƯỚC HOA NỮ',
				subtitle: 'Nước hoa Nữ',
				imageUrl: 'https://bizweb.dktcdn.net/100/429/123/themes/824870/assets/sec_group_product_banner_2.jpg?1755238846140',
				perfumes: womenPerfumes as Perfume[],
			},
			{
				key: 'unisex',
				title: 'NƯỚC HOA UNISEX',
				subtitle: 'Nước hoa Unisex',
				imageUrl: 'https://bizweb.dktcdn.net/100/429/123/themes/824870/assets/sec_group_product_banner_3.jpg?1755238846140',
				perfumes: unisexPerfumes as Perfume[],
			},
		],
		[],
	);

	return (
		<>
			<SlideSwiper images={images} />

			<div className="bg-[rgb(245,245,245)]">
				<div className="container mx-auto flex flex-col gap-8 py-6">
					{perfumeGroups.map(({ key, title, subtitle, imageUrl, perfumes }) => (
						<div key={key}>
							<Banner title={title} subtitle={subtitle} imageUrl={imageUrl} />
							<div className="flex w-full flex-col border-[0.5px] border-b-[1px]">
								<PerfumeCarousel perfumes={perfumes} />
								<div className="flex h-fit w-full justify-center border-t-[0.75px]">
									<Button>
										<RightPointerIcon />
										<span>Xem tất cả</span>
									</Button>
								</div>
							</div>
						</div>
					))}

					<Blogs />
				</div>
			</div>
		</>
	);
}
