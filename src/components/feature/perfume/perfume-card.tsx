'use client';

import Image from 'next/image';
import { EyeIcon } from 'lucide-react';

import { Perfume } from '@/types/perfume';

import { cn } from '@/utils/style';

interface PerfumeCardProps {
	perfume: Perfume;
	className?: string;
	layout?: 'column' | 'row';
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume, className, layout = 'column' }) => {
	return (
		<div
			className={cn(
				'group relative flex gap-2 overflow-hidden border-[0.5px] bg-white p-3 text-center transition',
				layout === 'column' ? 'flex-col items-center' : 'flex-row items-start',
				className,
			)}
		>
			<div className={cn('relative mx-auto flex items-center justify-center', layout === 'column' ? 'h-[186px] w-[186px] pb-6' : 'h-[240px] min-w-[226px]')}>
				<Image
					src={perfume.image}
					alt={perfume.name}
					width={layout === 'column' ? 186 : 226}
					height={layout === 'column' ? 186 : 240}
					className="h-full w-full object-contain"
				/>
			</div>

			<div className="relative flex w-full flex-col items-start gap-1">
				<h3 className={cn('line-clamp-2 text-left text-sm font-medium', layout === 'column' ? 'h-10' : 'mb-1')}>{perfume.name}</h3>
				<p
					className={cn('text-primary-default transform text-sm font-semibold transition-all duration-300', {
						'group-hover:translate-y-6 group-hover:opacity-0': layout === 'column',
					})}
				>
					{perfume.price.from.toLocaleString('vi-VN')}đ - {perfume.price.to.toLocaleString('vi-VN')}đ
				</p>
				{layout === 'row' && <p className="mt-4 line-clamp-3 text-left text-xs font-normal text-[#ACACAC] md:text-sm">{perfume.description}</p>}
			</div>

			<div
				className={cn('absolute bottom-3 left-3 flex translate-x-4 translate-y-4 scale-75 gap-2 opacity-0 transition-all duration-300', {
					'group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100': layout === 'column',
				})}
			>
				<button className="border-primary-default text-primary-default hover:bg-primary-default flex h-7 w-7 cursor-pointer items-center justify-center rounded-[2px] border bg-white transition-all duration-200 hover:text-white">
					<EyeIcon size={17} />
				</button>
			</div>
		</div>
	);
};

export default PerfumeCard;
