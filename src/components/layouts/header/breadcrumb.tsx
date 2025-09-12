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
						<React.Fragment key={item.label}>
							{!isLast ? (
								<>
									<BreadcrumbItem>
										<BreadcrumbLink asChild>
											<Link href={item.href || '#'}>{item.label}</Link>
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
								</>
							) : (
								<BreadcrumbItem>
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								</BreadcrumbItem>
							)}
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadcrumbContainer;
