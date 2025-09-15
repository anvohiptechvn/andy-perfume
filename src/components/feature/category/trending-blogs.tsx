import Image from 'next/image';
import Link from 'next/link';

import { Blog } from '@/types/blog';

import blogs from '@/data/blog/data.json' assert { type: 'json' };

const TrendingBlogs = () => {
	return (
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
	);
};

export default TrendingBlogs;
