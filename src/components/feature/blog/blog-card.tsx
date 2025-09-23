import Image from "next/image";
import Link from "next/link";

import { Blog } from "@/types/blog";

interface BlogCardProps {
  destinationUrl: string;
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ destinationUrl, blog }) => {
  return (
    <article className="flex items-start gap-2.5">
      <Link href={`${destinationUrl}/${blog.slug}`}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={240}
          height={192}
          className="h-auto w-[240px] object-cover"
        />
      </Link>
      <div className="flex-1">
        <Link
          href={`/khuyen-mai/${blog.slug}`}
          className="hover:text-primary-default text-sm font-semibold text-[#333333] md:text-base"
        >
          {blog.title}
        </Link>
        <p className="text-[10px] text-[#9B9B9B] md:text-xs">
          {new Date(blog.date).toLocaleDateString("vi-VN")} – {blog.author}
        </p>
        <p className="mt-2 line-clamp-3 text-xs text-[#4D4D4D] md:text-sm">
          {blog.description}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
