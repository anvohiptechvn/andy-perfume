import { cn } from '@/utils/style';

interface PageWrapperProps {
	children: React.ReactNode;
	className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
	return <section className={cn('container mx-auto my-4 flex flex-col gap-5 border px-2.5 py-4', className)}>{children}</section>;
};

export default PageWrapper;
