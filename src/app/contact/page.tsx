'use server';

import { Suspense } from 'react';

import ContactPage from './components';

const ContactContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<ContactPage />
		</Suspense>
	);
};

export default ContactContainer;
