import SaleDetail from "./components";

import saleBlogs from "@/data/sale/data.json" assert { type: "json" };

export default async function SalePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const saleBlog = saleBlogs.find((p) => p.slug === slug);

  if (!saleBlog) return <></>;

  return <SaleDetail data={saleBlog} />;
}

export async function generateStaticParams() {
  return saleBlogs.map((p) => ({ slug: p.slug }));
}
