import Link from 'next/link';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

const TopHeader = () => {
	return (
		<div className="bg-primary-default">
			<div className="container mx-auto grid grid-cols-3 px-4 py-6">
				{/* Search */}
				<div className="h-full flex-1">
					<div className="relative h-full w-[250px]">
						<Input
							type="text"
							placeholder="Tìm kiếm sản phẩm..."
							className="h-full rounded-sm bg-white py-3 pr-10 pl-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
						<Search className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
					</div>
				</div>

				{/* Logo */}
				<div className="flex flex-1 justify-center">
					<Link href="/" className="text-2xl font-bold text-gray-800 transition-colors hover:text-blue-600">
						<img src="/images/logo/perfume.png" alt="Logo" className="h-10 w-auto scale-200 invert" />
					</Link>
				</div>

				{/* Greeting */}
				<div className="flex flex-1 items-center justify-end text-xs font-semibold text-white md:text-sm">Xin chào, Khách</div>
			</div>
		</div>
	);
};

export default TopHeader;
