import React from 'react';
import Image from 'next/image';

interface BannerProps {
	title: string;
	subtitle?: string;
	imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, imageUrl }) => {
	return (
		<div>
			<div className="bg-primary-default flex h-10 items-center justify-between px-2.5">
				<span className="text-[15px] font-bold text-white">{title}</span>
				{subtitle && <p className="text-sm font-medium text-white">{subtitle}</p>}
			</div>

			<div className="group/banner relative h-[300px] w-full overflow-hidden sm:h-[400px] lg:h-[500px]">
				<Image src={imageUrl} alt={title} fill className="object-cover" priority />

				<div className="pointer-events-none absolute left-1/2 h-full w-full -translate-x-1/2 bg-white/40 opacity-0 transition-all duration-600 group-hover/banner:w-0 group-hover/banner:opacity-100" />
				<div className="pointer-events-none absolute top-1/2 h-full w-full -translate-y-1/2 scale-1000 bg-white/40 opacity-0 transition-all duration-600 group-hover/banner:h-0 group-hover/banner:opacity-100" />
			</div>
		</div>
	);
};

export default Banner;
