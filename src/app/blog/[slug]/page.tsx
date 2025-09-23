import BlogDetail from "@/components/feature/blog/blog-detail";

import blogs from "@/data/blogs/data.json" assert { type: "json" };
import relatedBlogs from "@/data/related-blogs/data.json" assert { type: "json" };

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((p) => p.slug === slug);

  if (!blog) return <></>;

  return (
    <BlogDetail
      destinationUrl="/blog"
      relatedBlogs={relatedBlogs}
      data={blog}
    />
  );
}

export async function generateStaticParams() {
  return blogs.map((p) => ({ slug: p.slug }));
}
