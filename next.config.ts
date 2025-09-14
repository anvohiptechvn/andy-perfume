import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	images: {
		domains: ['bizweb.dktcdn.net', 'images.unsplash.com'],
		unoptimized: true,
	},
};

export default nextConfig;
