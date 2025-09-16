import ProductDetail from './components';

import productsJson from '@/data/products/data.json' assert { type: 'json' };

export default async function PerfumePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const product = productsJson.find((p) => p.slug === id);

	if (!product) return <></>;

	return <ProductDetail name={product.name} details={product.content} images={[product.image, ...product.detailImages]} price={product.price} />;
}

// ✅ Required for static export
export async function generateStaticParams() {
	const products = productsJson.map((p) => ({ id: p.slug }));

	return products;
}
