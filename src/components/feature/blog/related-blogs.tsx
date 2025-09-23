import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Blog } from "@/types/blog";

interface RelatedBlogs {
  destinationUrl: string;
  blogs: Blog[];
}

const RelatedBlogs: React.FC<RelatedBlogs> = ({ destinationUrl, blogs }) => {
  if (!blogs.length) return null;

  return (
    <section className="p-4 rounded-[5px] bg-[#f8f8f8] flex flex-col gap-1.5">
      <h3 className="font-medium text-base md:text-lg text-[#222222]">
        BÀI VIẾT LIÊN QUAN
      </h3>

      {blogs.map((blog) => (
        <Link
          href={`${destinationUrl}/${blog.slug}`}
          className="flex items-center gap-2"
        >
          <ChevronRight size={16} />
          <p className="line-clamp-1 font-medium text-xs md:text-sm text-[#222222] hover:text-primary-default">
            {blog.title}
          </p>
        </Link>
      ))}
    </section>
  );
};

export default RelatedBlogs;
