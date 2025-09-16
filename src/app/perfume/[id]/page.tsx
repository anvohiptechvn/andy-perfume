import ProductDetail from './components';

export default async function PerfumePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const product = {
		id,
		name: 'Parfums De Marly Paris Valaya Exclusif EDP',
		images: [
			'https://bizweb.dktcdn.net/thumb/medium/100/429/123/products/ac333658-1acc-49ce-b439-9f5c0353e471.jpg?v=1664977636373',
			'https://bizweb.dktcdn.net/thumb/medium/100/429/123/products/bleu-de-chanel-edp.jpg?v=1689257782267',
			'https://bizweb.dktcdn.net/thumb/medium/100/429/123/products/tom-ford-ombre-leather-100ml-parfumerie.jpg?v=1647149712910',
		],
		price: 7750000,
	};

	return <ProductDetail name={product.name} images={product.images} price={product.price} />;
}

// ✅ Required for static export
export async function generateStaticParams() {
	// Pretend we have 2 perfumes
	const products = [{ id: '1' }, { id: '2' }];
	console.log('🛠 generateStaticParams called!');
	return products.map((product) => ({
		id: product.id,
	}));
}
