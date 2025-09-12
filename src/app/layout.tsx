import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/react';

import { ReactQueryProvider } from '@/providers/query-client';

import './globals.css';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Andy Perfume',
	description: 'Andy Perfume',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} font-roboto antialiased`}>
				<NuqsAdapter>
					<ReactQueryProvider>{children}</ReactQueryProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
