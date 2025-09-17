'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/style';
import React, { useState } from 'react';
import Policy from './policy';

import { Perfume } from '@/types/perfume';
import ServiceHighlights from '@/components/feature/service/highlights';

import UsageGuide from './usage-guide';
import PerfumeDescription from './description';
import RelatedProducts from './related-products';

import relatedProducts from '@/data/related-products/data.json' assert { type: 'json' };

interface ProductDetailProps {
	data: Perfume;
}

const inStock = true;

const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
	const { name, detailImages, image, content, origin, capacities, description, sex } = data;

	const [quantity, setQuantity] = useState(1);
	const [tab, setTab] = useState<'info' | 'usage' | 'return'>('info');
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
	const [selectedCapacityIndex, setSelectedCapacityIndex] = useState<number | undefined>(() => {
		if (data?.capacities && data?.capacities.length > 0) {
			return data.capacities[0].value;
		}
		return undefined;
	});

	const increase = () => setQuantity((q) => q + 1);
	const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

	const tabs = React.useMemo(
		() => [
			{
				key: 'info',
				label: 'THÔNG TIN SẢN PHẨM',
			},
			{
				key: 'usage',
				label: 'HƯỚNG DẪN SỬ DỤNG & BẢO QUẢN',
			},
			{
				key: 'return',
				label: 'CHÍNH SÁCH ĐỔI TRẢ - BẢO HÀNH',
			},
		],
		[],
	);

	const renderPrice = () => {
		if (capacities) {
			const lengthOfCapacities = capacities.length;
			if (!lengthOfCapacities) return '0đ';

			if (typeof selectedCapacityIndex !== 'undefined') {
				const selectedCapacity = capacities[selectedCapacityIndex];
				if (selectedCapacity) {
					return `${selectedCapacity.price.toLocaleString('vi-VN')}đ`;
				}
			}
			return `${capacities[0]?.price.toLocaleString('vi-VN')}đ`;
		}
		if (data?.price) {
			return `${(data?.price || 0).toLocaleString('vi-VN')}đ`;
		}
		return '0đ';
	};

	return (
		<div className="container mx-auto px-1.5 py-4 md:px-0">
			{/* Layout */}
			<div className="flex flex-col gap-8 border bg-white p-2.5 md:flex-row">
				<div className="flex flex-1 flex-col">
					<div className="group relative cursor-zoom-in">
						<img src={detailImages[activeImageIndex]} alt={name} className="aspect-[9/8] w-full object-contain px-12 py-8" />

						{/* Zoomed Image (only shows on hover) */}
						<div className="absolute top-0 left-[105%] hidden h-[450px] w-[450px] overflow-hidden border-2 border-[#42495B] bg-white p-5 transition-all duration-200 group-hover:flex">
							<img src={detailImages[activeImageIndex]} alt={name} className="h-full w-full object-contain duration-300" />
						</div>
					</div>

					{/* Thumbnails */}
					<div className="mt-4 flex gap-2">
						{detailImages.map((img, idx) => (
							<img key={idx} src={img} alt="thumb-1" className="h-[82px] w-[100px] border object-contain p-3" onClick={() => setActiveImageIndex(idx)} />
						))}
					</div>
				</div>

				<div className="flex w-2/3 flex-col gap-4">
					<div>
						<h1 className="text-xl font-semibold text-[#191919] md:text-[22px]">{name}</h1>
						<p className="flex gap-1 text-xs font-bold md:text-sm">
							<span className="text-[#42495B]">Tình trạng:</span>
							<span className="text-primary-default font-normal">{inStock ? 'Còn hàng' : 'Hết hàng'}</span>
						</p>
					</div>
					<p className="text-primary-default text-xl font-medium md:text-[22px]">{renderPrice()}</p>
					<p className="tex-sm text-[#42495b] md:text-base">{description}</p>

					{(sex || origin) && (
						<div className="flex flex-col gap-4">
							{sex && (
								<div className="flex flex-col gap-1">
									<span className="font-bold text-[#42495B]">Giới tính</span>
									<div className="w-fit border px-4 py-1.5 text-[#191919]">
										{sex === 'male' ? 'Nam' : sex === 'female' ? 'Nữ' : sex === 'unisex' ? 'Unisex' : sex}
									</div>
								</div>
							)}
							{origin && (
								<div className="flex flex-col gap-1">
									<span className="font-bold text-[#42495B]">Xuất xứ</span>
									<div className="w-fit border px-4 py-1.5 text-[#191919]">{origin}</div>
								</div>
							)}
						</div>
					)}

					{capacities && capacities.length > 0 && (
						<div>
							<span className="text-xs font-bold text-[#42495B] md:text-sm">Dung tích:</span>
							<div className="mt-2 flex flex-wrap gap-2">
								{capacities.map((cap, idx) => (
									<button
										key={idx}
										type="button"
										className={cn(
											'rounded border px-4 py-2 text-sm font-medium transition-colors',
											selectedCapacityIndex === idx
												? 'border-neutral-500 bg-neutral-50 text-[#42495B]'
												: 'hover:border-primary-default/50 border-[#ACACAC] bg-white text-[#42495B]',
										)}
										onClick={() => setSelectedCapacityIndex(idx)}
									>
										{cap.value}ml
									</button>
								))}
							</div>
						</div>
					)}

					<div>
						<span className="text-xs font-bold text-[#42495B] md:text-sm">Số lượng:</span>
						<div className="flex w-fit items-center border">
							<button className="h-10 w-10 cursor-pointer border-r hover:bg-neutral-50" onClick={decrease}>
								-
							</button>
							<input
								type="number"
								className="h-10 w-[60px] [appearance:textfield] border-0 text-center text-xs outline-none md:text-sm"
								value={quantity}
								onChange={(e) => setQuantity(Number(e.target.value))}
							/>
							<button className="h-10 w-10 cursor-pointer border-l hover:bg-neutral-50" onClick={increase}>
								+
							</button>
						</div>
					</div>

					<Button className="w-full py-6 text-lg font-bold md:w-1/2 md:text-xl">MUA NGAY</Button>
				</div>
			</div>

			{/* Tabs */}
			<div className="mt-6 flex flex-col gap-4 md:flex-row">
				<div className="h-fit flex-1 border p-2.5">
					<div className="bg-primary-default flex border-b py-2">
						{tabs.map((tabItem) => (
							<button key={tabItem.key} className={cn('relative px-4 py-2 font-medium text-white')} onClick={() => setTab(tabItem.key as typeof tab)}>
								{tabItem.label}

								{tab === tabItem.key && <div className={cn('absolute top-[90%] left-1/2 h-0.5 w-10 -translate-x-1/2 bg-white')}></div>}
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className="pt-4">
						{tab === 'info' && <PerfumeDescription content={content} />}
						{tab === 'usage' && <UsageGuide />}
						{tab === 'return' && <Policy />}
					</div>
				</div>

				<div className="w-full md:w-1/4">
					<ServiceHighlights />
				</div>
			</div>

			{/* Related products */}
			<div className="mt-8">
				<RelatedProducts products={relatedProducts as Perfume[]} />
			</div>
		</div>
	);
};

export default ProductDetail;
