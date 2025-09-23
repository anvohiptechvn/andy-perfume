import React from 'react';

import Header from './header';
import Footer from './footer';
import Social from './social';

interface BaseLayoutProps {
	children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />

			<Social />
		</div>
	);
};

export default BaseLayout;
