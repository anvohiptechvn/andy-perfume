import { Suspense } from 'react';

import ProductsPage from './components';

const ProductsContainer = () => {
	return (
		<Suspense fallback={<></>}>
			<ProductsPage />;
		</Suspense>
	);
};

export default ProductsContainer;
