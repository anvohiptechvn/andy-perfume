'use server';

import { Suspense } from 'react';

import PerfumeExtractPage from './components';

const PerfumeExtractContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<PerfumeExtractPage />
		</Suspense>
	);
};

export default PerfumeExtractContainer;
