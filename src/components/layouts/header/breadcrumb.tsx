'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

export interface Crumb {
	label: string;
	href?: string;
}

const BreadcrumbContainer = ({ items }: { items: Crumb[] }) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					return (
						<BreadcrumbItem key={item.label}>
							{!isLast ? (
								<>
									<BreadcrumbLink asChild>
										<Link href={item.href || '#'}>{item.label}</Link>
									</BreadcrumbLink>
									<BreadcrumbSeparator />
								</>
							) : (
								<BreadcrumbPage>{item.label}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadcrumbContainer;
