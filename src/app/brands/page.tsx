'use server';

import { Suspense } from 'react';

import BrandPage from './components';

const BrandContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<BrandPage />
		</Suspense>
	);
};

export default BrandContainer;
