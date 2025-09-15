'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { Blog } from '@/types/blog';
import { Category } from '@/types/category';

import { CustomPagination } from '@/components/ui/custom-pagination';

import { cn } from '@/utils/style';

import blogs from '@/data/blog/blogs.json' assert { type: 'json' };
import categories from '@/data/category/data.json' assert { type: 'json' };

export default function BlogPage() {
	const [openCategory, setOpenCategory] = useState<string | null>(null);

	return (
		<div className="container mx-auto flex flex-col-reverse gap-6 px-4 py-10 md:grid md:grid-cols-4">
			{/* Sidebar */}
			<aside className="h-fit border pb-2.5 md:col-span-1">
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
				<div className="flex flex-col gap-2.5">
					<h3 className="border-b p-2.5 font-bold text-gray-700">NỔI BẬT</h3>
					<ul className="flex flex-col gap-2.5">
						{(blogs as Blog[]).map((post, i) => (
							<li key={i} className="flex items-start gap-3 px-2.5">
								<Image src={post.image} alt={post.title} width={70} height={70} className="h-auto w-[70px] object-cover" />
								<div>
									<Link href={post.link} className="line-clamp-2 text-xs text-[#333333] hover:text-[#333333]/80 md:text-[13px]">
										{post.title}
									</Link>
									<p className="text-[10px] text-[#42495b] md:text-[11px] md:text-[#42495b]/80">{new Date(post.date).toLocaleDateString('vi-VN')}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</aside>

			{/* Main content */}
			<main className="border px-2.5 pb-2.5 md:col-span-3">
				<h2 className="py-2.5 text-xl font-bold">Thông tin</h2>
				<div className="flex flex-col gap-5">
					{(blogs as Blog[]).map((post, i) => (
						<article key={i} className="flex items-start gap-2.5">
							<Image src={post.image} alt={post.title} width={240} height={192} className="h-auto w-[240px] object-cover" />
							<div className="flex-1">
								<Link href={post.link} className="text-sm font-semibold text-[#333333] hover:text-[#333333]/80 md:text-base">
									{post.title}
								</Link>
								<p className="text-[10px] text-[#9B9B9B] md:text-xs">
									{new Date(post.date).toLocaleDateString('vi-VN')} – {post.author}
								</p>
								<p className="line-clamp-3 text-xs text-[#4D4D4D] md:text-sm">{post.excerpt}</p>
							</div>
						</article>
					))}
				</div>

				<div className="mt-6">
					<CustomPagination currentPage={1} totalPages={4} onPageChange={(page) => console.log('Go to page', page)} />
				</div>
			</main>
		</div>
	);
}
