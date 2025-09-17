import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	images: {
		domains: ['bizweb.dktcdn.net', 'images.unsplash.com'],
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
