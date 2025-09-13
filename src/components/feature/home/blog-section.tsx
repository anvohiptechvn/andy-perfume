'use client';

import Image from 'next/image';

import blogs from '@/data/blog/blogs.json' assert { type: 'json' };
import Link from 'next/link';

export default function Blogs() {
	return (
		<section className="gap flex flex-col gap-3 bg-white py-4">
			<h2 className="relative inline-block text-center text-lg font-semibold md:text-xl">
				THÔNG TIN
				<span className="bg-primary-default mx-auto block h-[2px] w-23 md:w-25"></span>
			</h2>

			<div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
				{blogs.map((blog) => (
					<div key={blog.id} className="flex w-full flex-col gap-2.5 overflow-hidden bg-white">
						<div className="relative mx-auto h-[183px] w-[183px]">
							<Image src={blog.image} alt={blog.title} fill className="object-cover" />
						</div>
						<div className="flex flex-col gap-2">
							<Link href={'#'} className="hover:text-primary-default line-clamp-3 cursor-pointer text-[15px] font-semibold">
								{blog.title}
							</Link>
							<p className="text-xs text-[#888888]">
								Đăng bởi <span className="font-semibold">{blog.author}</span> - {blog.date}
							</p>
							<p className="text-sm leading-[23.8px] text-[#42495B]">{blog.excerpt}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
