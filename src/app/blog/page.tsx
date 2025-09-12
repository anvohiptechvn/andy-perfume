'use server';

import { Suspense } from 'react';

import BlogPage from './components';

const BlogContainer = async () => {
	return (
		<Suspense fallback={<></>}>
			<BlogPage />
		</Suspense>
	);
};

export default BlogContainer;
