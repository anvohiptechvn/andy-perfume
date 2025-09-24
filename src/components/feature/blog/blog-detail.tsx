import { Blog } from "@/types/blog";

import CategorySidebar from "@/components/feature/category/sidebar";

import RelatedBlogs from "./related-blogs";

interface BlogDetailProps {
  relatedBlogs: Blog[];
  destinationUrl: string;
  data: Blog;
  rightAside?: React.ReactNode;
}

const BlogDetail: React.FC<BlogDetailProps> = ({
  relatedBlogs,
  destinationUrl,
  data,
  rightAside,
}) => {
  return (
    <div className="container mx-auto flex flex-col-reverse gap-6 px-1.5 pt-4 pb-10 md:grid md:grid-cols-4 md:px-0">
      <CategorySidebar />

      <div className="col-span-3 flex flex-col md:flex-row gap-4">
        <main className="flex-1 flex flex-col gap-3 border px-2.5 py-4 w-full">
          <h2 className="text-lg font-medium text-[#323c3f] md:text-[22px]">
            {data.title}
          </h2>

          <p className="text-[10px] text-[#B2B2B2] md:text-xs">
            ĐĂNG BỞI <span className="font-semibold">{data.author}</span> VÀO
            LÚC {data.date}
          </p>

          <div dangerouslySetInnerHTML={{ __html: data.content }} />

          <RelatedBlogs destinationUrl={destinationUrl} blogs={relatedBlogs} />
        </main>

        {rightAside}
      </div>
    </div>
  );
};

export default BlogDetail;
