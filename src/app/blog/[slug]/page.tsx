import BlogDetail from './components';

import blogs from '@/data/blog/data.json' assert { type: 'json' };

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const blog = blogs.find((p) => p.slug === slug);

	if (!blog) return <></>;

	return <BlogDetail data={blog} />;
}

export async function generateStaticParams() {
	return blogs.map((p) => ({ slug: p.slug }));
}
