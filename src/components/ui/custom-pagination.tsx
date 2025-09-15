'use client';

import * as React from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function CustomPagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<Pagination>
			<PaginationContent className="justify-center gap-4">
				{/* Previous */}
				<PaginationItem>
					<PaginationPrevious
						href="#"
						onClick={(e) => {
							e.preventDefault();
							if (currentPage > 1) onPageChange(currentPage - 1);
						}}
						className="disabled:opacity-40"
					/>
				</PaginationItem>

				{/* Page Numbers */}
				{pages.map((page) => (
					<PaginationItem key={page}>
						<PaginationLink
							href="#"
							onClick={(e) => {
								e.preventDefault();
								onPageChange(page);
							}}
							isActive={page === currentPage}
							className="px-2 py-1 text-xs md:text-sm"
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}

				{/* Next */}
				<PaginationItem>
					<PaginationNext
						href="#"
						onClick={(e) => {
							e.preventDefault();
							if (currentPage < totalPages) onPageChange(currentPage + 1);
						}}
						className="disabled:opacity-40"
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
