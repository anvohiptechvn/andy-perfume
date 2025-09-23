'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQueryStates } from 'nuqs';

import { Blog, SEARCH_BLOG_PARAMS } from '@/types/blog';

import { CustomPagination } from '@/components/ui/custom-pagination';
import CategorySidebar from '@/components/feature/category/sidebar';

import blogs from '@/data/blog/data.json' assert { type: 'json' };

const BlogPage = () => {
	const [params, setParams] = useQueryStates(SEARCH_BLOG_PARAMS);

	const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		const fetchingProducts = async () => {
			setTimeout(() => {
				setFilteredBlogs(blogs);
			}, 300);
		};

		fetchingProducts();
	}, []);

	const displayedBlogs = useMemo<Blog[]>(() => filteredBlogs.slice((params.page - 1) * params.limit, params.page * params.limit), [filteredBlogs, params]);

	const totalPage = useMemo<number>(() => Math.ceil(filteredBlogs.length / params.limit), [filteredBlogs.length, params.limit]);

	return (
		<div className="container mx-auto flex flex-col-reverse gap-6 px-1.5 pt-4 pb-10 md:grid md:grid-cols-4 md:px-0">
			<CategorySidebar />

			{/* Main content */}
			<main className="border px-2.5 pb-2.5 md:col-span-3">
				<h2 className="py-2.5 text-xl font-bold">Thông tin</h2>
				<div className="flex flex-col gap-5">
					{displayedBlogs.map((blog, i) => (
						<article key={i} className="flex items-start gap-2.5">
							<Link href={`/blog/${blog.slug}`}>
								<Image src={blog.image} alt={blog.title} width={240} height={192} className="h-auto w-[240px] object-cover" />
							</Link>
							<div className="flex-1">
								<Link href={`/blog/${blog.slug}`} className="hover:text-primary-default text-sm font-semibold text-[#333333] md:text-base">
									{blog.title}
								</Link>
								<p className="text-[10px] text-[#9B9B9B] md:text-xs">
									{new Date(blog.date).toLocaleDateString('vi-VN')} – {blog.author}
								</p>
								<p className="line-clamp-3 text-xs text-[#4D4D4D] md:text-sm">{blog.description}</p>
							</div>
						</article>
					))}
				</div>

				<div className="my-6">
					<CustomPagination currentPage={params.page} totalPages={totalPage} onPageChange={(page) => setParams({ ...params, page })} />
				</div>
			</main>
		</div>
	);
};

export default BlogPage;
