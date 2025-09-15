'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { Category } from '@/types/category';

import TrendingBlogs from './trending-blogs';

import { cn } from '@/utils/style';

import categories from '@/data/category/data.json' assert { type: 'json' };

interface CategorySidebarProps {
	displayedBlogs?: boolean;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ displayedBlogs = true }) => {
	const [openCategory, setOpenCategory] = useState<string | null>(null);

	return (
		<aside className={cn('h-fit border md:col-span-1', displayedBlogs ? 'pb-2.5' : 'border-b-0')}>
			<div>
				<h3 className="border-b p-2.5 text-xs font-semibold md:text-sm">DANH MỤC</h3>
				<ul>
					{(categories as Category[]).map((cat, index) => {
						const hasChildren = !!cat.children;
						const isOpen = openCategory === cat.name;

						return (
							<li key={index} className={isOpen ? 'border-b' : ''}>
								<button
									onClick={() => (hasChildren ? setOpenCategory(isOpen ? null : cat.name) : null)}
									className={cn(
										'hover:text-primary-default flex w-full items-center justify-between border-b px-2.5 py-1.5 text-left text-xs font-normal text-[#222222] transition-colors md:text-sm',
										{ 'text-primary-default': isOpen },
									)}
								>
									{cat.link ? <Link href={cat.link}>{cat.name}</Link> : <span>{cat.name}</span>}
									{hasChildren && <ChevronDown size={16} />}
								</button>

								{/* Render children */}
								{hasChildren && isOpen && (
									<ul className="pl-4">
										{cat.children!.map((child, childIndex) => {
											if (child.children) {
												return (
													<li key={childIndex}>
														<span className="block font-medium">{child.name}</span>
														<ul className="px-2.5 py-[3px]">
															{child.children.map((sub, subIndex) => (
																<li key={subIndex}>
																	<Link href={sub.link} className="text-gray-600 hover:text-emerald-600">
																		{sub.name}
																	</Link>
																</li>
															))}
														</ul>
													</li>
												);
											}
											return (
												<li key={childIndex} className="px-2.5 py-[3px]">
													<Link href={child.link!} className="hover:text-primary-default text-xs text-[#222222] md:text-sm">
														{child.name}
													</Link>
												</li>
											);
										})}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</div>

			{/* Featured posts */}
			{displayedBlogs && <TrendingBlogs />}
		</aside>
	);
};

export default CategorySidebar;
