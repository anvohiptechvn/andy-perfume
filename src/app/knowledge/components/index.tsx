'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Blog } from '@/types/blog';

import { CustomPagination } from '@/components/ui/custom-pagination';
import CategorySidebar from '@/components/feature/category/sidebar';

import blogs from '@/data/knowledge/data.json' assert { type: 'json' };

const KnowledgePage = () => {
	return (
		<div className="container mx-auto flex flex-col-reverse gap-6 px-4 py-10 md:grid md:grid-cols-4">
			<CategorySidebar />

			{/* Main content */}
			<main className="border px-2.5 pb-2.5 md:col-span-3">
				<h2 className="py-2.5 text-xl font-bold">Thông tin</h2>
				<div className="flex flex-col gap-5">
					{(blogs as Blog[]).map((post, i) => (
						<article key={i} className="flex items-start gap-2.5">
							<Image src={post.image} alt={post.title} width={240} height={192} className="h-auto w-[240px] object-cover" />
							<div className="flex-1">
								<Link href={post.link} className="hover:text-primary-default text-sm font-semibold text-[#333333] md:text-base">
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
};

export default KnowledgePage;
