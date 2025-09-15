'use client';

import Image from 'next/image';
import { EyeIcon } from 'lucide-react';

import { Perfume } from '@/types/perfume';

import { cn } from '@/utils/style';

interface PerfumeCardProps {
	perfume: Perfume;
	className?: string;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume, className }) => {
	return (
		<div className={cn('group relative flex flex-col items-center gap-2 overflow-hidden border-[0.5px] bg-white p-3 pb-6 text-center transition', className)}>
			<div className="relative mx-auto flex h-[186px] w-[186px] items-center justify-center">
				<Image src={perfume.image} alt={perfume.name} width={186} height={186} className="h-full w-full object-contain" />
			</div>

			<div className="relative flex w-full flex-col items-start gap-1">
				<h3 className="line-clamp-2 h-10 text-left text-sm font-medium">{perfume.name}</h3>
				<p className="text-primary-default transform text-sm font-semibold transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0">
					{perfume.price.from.toLocaleString('vi-VN')}đ - {perfume.price.to.toLocaleString('vi-VN')}đ
				</p>
			</div>

			<div className="absolute bottom-3 left-3 flex translate-x-4 translate-y-4 scale-75 gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
				<button className="border-primary-default text-primary-default hover:bg-primary-default flex h-7 w-7 cursor-pointer items-center justify-center rounded-[2px] border bg-white transition-all duration-200 hover:text-white">
					<EyeIcon size={17} />
				</button>
			</div>
		</div>
	);
};

export default PerfumeCard;
