import React from 'react';

import Header from './header';
import Footer from './footer';

interface BaseLayoutProps {
	children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="container mx-auto flex-1 px-4 py-8">{children}</main>
			<Footer />
		</div>
	);
};

export default BaseLayout;
