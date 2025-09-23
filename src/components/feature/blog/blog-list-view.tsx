'use client';

import Link from 'next/link';
import Image from 'next/image';

import blogs from '@/data/blog/data.json' assert { type: 'json' };

const BlogListView = () => {
	return (
		<section className="gap flex flex-col gap-3 bg-white py-4">
			<h2 className="relative inline-block text-center text-lg font-semibold md:text-xl">
				THÔNG TIN
				<span className="bg-primary-default mx-auto block h-[2px] w-23 md:w-25"></span>
			</h2>

			<div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
				{blogs.slice(0, 4).map((blog) => (
					<div key={blog.slug} className="flex w-full flex-col gap-2.5 overflow-hidden bg-white">
						<Link href={`/blog/${blog.slug}`} className="relative mx-auto h-[183px] w-[183px]">
							<Image src={blog.image} alt={blog.title} fill className="object-cover" />
						</Link>
						<div className="flex flex-col gap-2">
							<Link href={`/blog/${blog.slug}`} className="hover:text-primary-default line-clamp-3 cursor-pointer text-[15px] font-semibold">
								{blog.title}
							</Link>
							<p className="text-xs text-[#888888]">
								Đăng bởi <span className="font-semibold">{blog.author}</span> - {blog.date}
							</p>
							<p className="text-sm leading-[23.8px] text-[#42495B]">{blog.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogListView;
