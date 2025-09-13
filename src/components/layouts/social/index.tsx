'use client';

import Image from 'next/image';

import BackToTopButton from './back-to-top';

import { cn } from '@/utils/style';

import socialLinks from '@/data/social/data.json' assert { type: 'json' };

interface SocialLink {
	key: string;
	href: string;
	target?: string;
	rel?: string;
	className: string;
	ariaLabel: string;
	img: {
		src: string;
		alt: string;
	};
}

const Social = () => {
	return (
		<div className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3">
			{(socialLinks as SocialLink[]).map((item) => (
				<a
					key={item.ariaLabel}
					href={item.href}
					target={item.target}
					rel={item.rel}
					className={cn('flex h-10 w-10 items-center justify-center rounded-full', item.key === 'phone' ? 'bg-[#64bc46]' : '')}
					aria-label={item.ariaLabel}
				>
					<Image
						src={item.img.src}
						alt={item.img.alt}
						width={item.key === 'phone' ? 28 : 40}
						height={item.key === 'phone' ? 28 : 40}
						className={cn('object-contain', item.key === 'phone' ? 'animate-spin-slow h-7 w-7' : 'h-10 w-10')}
					/>
				</a>
			))}

			<div className="mt-4">
				<BackToTopButton />
			</div>
		</div>
	);
};

export default Social;
