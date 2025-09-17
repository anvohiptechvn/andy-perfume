import { Suspense } from 'react';
import SearchPage from './components';

const SearchContainer = () => {
	return (
		<Suspense fallback={<></>}>
			<SearchPage />
		</Suspense>
	);
};

export default SearchContainer;
