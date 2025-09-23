import { Blog } from '@/types/blog';

import CategorySidebar from '@/components/feature/category/sidebar';

interface InformationDetailProps {
	data: Blog;
}

const InformationDetail: React.FC<InformationDetailProps> = ({ data }) => {
	return (
		<div className="container mx-auto flex flex-col-reverse gap-6 px-1.5 pt-4 pb-10 md:grid md:grid-cols-4 md:px-0">
			<CategorySidebar />

			<main className="flex flex-col gap-3 border px-2.5 py-4 md:col-span-3">
				<h2 className="text-lg font-medium text-[#323c3f] md:text-[22px]">{data.title}</h2>

				<p className="text-[10px] text-[#B2B2B2] md:text-xs">
					ĐĂNG BỞI <span className="font-semibold">{data.author}</span> VÀO LÚC {data.date}
				</p>

				<div dangerouslySetInnerHTML={{ __html: data.content }} />
			</main>
		</div>
	);
};

export default InformationDetail;
