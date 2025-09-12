'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { routes } from '@/constants/navbar';
import { cn } from '@/utils/style';

const Navbar = () => {
	const pathName = usePathname();

	return (
		<nav className="container mx-auto px-12">
			<ul className="relative flex w-full justify-between py-3">
				{routes.map((route) => (
					<li key={route.name} className={cn('group', route.submenu && route.submenu.length < 5 ? 'relative' : '')}>
						<Link
							href={route.href}
							className={cn(
								'flex items-center gap-1 text-xs text-black transition-all duration-200 hover:font-medium md:text-[15px]',
								(route.href !== '/' && pathName.startsWith(route.href)) || (route.href === '/' && pathName === route.href) ? 'font-medium' : 'font-normal',
							)}
						>
							{route.name}
							{route?.submenu && <ChevronRight size={16} />}
						</Link>

						{/* Mega menu (> 5 items) */}
						{route.submenu && route.submenu.length > 5 && (
							<div className="absolute top-[calc(100%-16px)] right-0 left-0 z-50 hidden pt-4 group-hover:flex">
								<div className="h-full w-full bg-white shadow-lg">
									<div className="grid grid-cols-5 gap-3 p-3">
										{route.submenu.map((subItem) => (
											<Link key={subItem.name} href={subItem.href} className="hover:text-primary-default block text-sm text-black">
												{subItem.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Small dropdown (≤ 5 items) */}
						{route.submenu && route.submenu.length <= 5 && (
							<div className="absolute top-full left-0 z-50 hidden w-48 pt-3 group-hover:flex">
								<ul className="flex w-full flex-col gap-3 bg-white p-3 shadow-lg">
									{route.submenu.map((subItem) => (
										<li key={subItem.name}>
											<Link href={subItem.href} className="hover:text-primary-default block text-sm text-black">
												{subItem.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
