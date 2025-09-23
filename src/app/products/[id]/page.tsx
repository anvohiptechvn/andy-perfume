import ProductDetail from './components';

import products from '@/data/products/data.json' assert { type: 'json' };

export default async function PerfumePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const product = products.find((p) => p.slug === id);

	if (!product) return <></>;

	return <ProductDetail data={product} />;
}

export async function generateStaticParams() {
	return products.map((p) => ({ id: p.slug }));
}
