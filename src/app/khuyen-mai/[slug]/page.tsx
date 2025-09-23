import SaleDetail from "@/components/feature/blog/blog-detail";

import saleBlogs from "@/data/sale/data.json" assert { type: "json" };
import relatedSaleBlogs from "@/data/related-sale-blogs/data.json" assert { type: "json" };

export default async function SalePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const saleBlog = saleBlogs.find((p) => p.slug === slug);

  if (!saleBlog) return <></>;

  return (
    <SaleDetail
      destinationUrl="/khuyen-mai"
      relatedBlogs={relatedSaleBlogs}
      data={saleBlog}
    />
  );
}

export async function generateStaticParams() {
  return saleBlogs.map((p) => ({ slug: p.slug }));
}
