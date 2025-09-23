'use client';

import { cn } from '@/utils/style';
import { ArrowUpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			aria-label="Back to top"
			className={cn(
				'flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#042f24] transition-opacity duration-300 hover:bg-[#042f24]/80',
				visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
			)}
		>
			<ArrowUpCircle size={20} className="text-white" />
		</button>
	);
};

export default BackToTopButton;
