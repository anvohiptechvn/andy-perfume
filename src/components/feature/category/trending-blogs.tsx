import Image from 'next/image';
import Link from 'next/link';

import { Blog } from '@/types/blog';

import blogs from '@/data/trending-blogs/data.json' assert { type: 'json' };

const TrendingBlogs = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<h3 className="border-b p-2.5 font-bold text-gray-700">NỔI BẬT</h3>
			<ul className="flex max-h-[30dvh] flex-col gap-2.5 overflow-y-auto">
				{(blogs as Blog[]).map((blog, i) => (
					<li key={i} className="flex items-start gap-3 px-2.5">
						<Link href={`/blog/${blog.slug}`}>
							<Image src={blog.image} alt={blog.title} width={70} height={70} className="h-auto w-[70px] object-cover" />
						</Link>
						<div>
							<Link href={`/blog/${blog.slug}`} className="line-clamp-2 text-xs text-[#333333] hover:text-[#333333]/80 md:text-[13px]">
								{blog.title}
							</Link>
							<p className="text-[10px] text-[#42495b] md:text-[11px] md:text-[#42495b]/80">{new Date(blog.date).toLocaleDateString('vi-VN')}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrendingBlogs;
