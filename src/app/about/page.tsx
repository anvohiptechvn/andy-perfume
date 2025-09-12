'use server';

import { Suspense } from 'react';

import AboutPage from './components';

const AboutContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<AboutPage />
		</Suspense>
	);
};

export default AboutContainer;
