'use server';

import { Suspense } from 'react';

import KnowledgePage from './components';

const KnowledgeContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<KnowledgePage />
		</Suspense>
	);
};

export default KnowledgeContainer;
