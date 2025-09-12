'use client';

import { usePathname } from 'next/navigation';

import TopHeader from './top-header';
import Navbar from './navbar';
import BreadcrumbContainer, { Crumb } from './breadcrumb';

import { NavItem, routes } from '@/constants/navbar';
import { useMemo } from 'react';

const Header = () => {
	const pathName = usePathname();

	const breadcrumbRoutes = useMemo<Crumb[]>(() => {
		if (!routes.length) return [];

		const pathSegments = pathName.split('/').filter(Boolean);
		const breadcrumbs: Crumb[] = [{ label: 'TRANG CHỦ', href: '/' }];

		// Build breadcrumb path dynamically
		let currentPath = '';
		for (let i = 0; i < pathSegments.length; i++) {
			currentPath += `/${pathSegments[i]}`;

			// Check main routes first
			const mainRoute = routes.find((route) => route.href === currentPath);
			if (mainRoute) {
				breadcrumbs.push({ label: mainRoute.name, href: mainRoute.href });
				continue;
			}

			// Check submenu routes
			const parentRoute = routes.find((route) => route.submenu?.some((sub) => sub.href === currentPath));
			if (parentRoute?.submenu) {
				const subItem = parentRoute.submenu.find((sub) => sub.href === currentPath);
				if (subItem) {
					// Add parent if not already added
					if (!breadcrumbs.some((crumb) => crumb.href === parentRoute.href)) {
						breadcrumbs.push({ label: parentRoute.name, href: parentRoute.href });
					}
					breadcrumbs.push({ label: subItem.name, href: subItem.href });
				}
			}
		}

		return breadcrumbs;
	}, [pathName, routes]);

	return (
		<header className="w-full bg-white">
			<TopHeader />
			<Navbar />

			{pathName !== '/' && (
				<div className="bg-[#f9f9f9] px-4 py-3">
					<div className="container mx-auto px-4">
						<BreadcrumbContainer items={breadcrumbRoutes} />
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
