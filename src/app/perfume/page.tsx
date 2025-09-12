'use server';

import { Suspense } from 'react';

import PerfumePage from './components';

const PerfumeContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<PerfumePage />
		</Suspense>
	);
};

export default PerfumeContainer;
