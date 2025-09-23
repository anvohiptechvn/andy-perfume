// 'use client';

// import * as React from 'react';
// import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

// import { DEFAULT_PAGE } from '@/types/http';

// import { ChevronsLeft, ChevronsRight } from 'lucide-react';

// export interface PaginationProps {
// 	currentPage: number;
// 	totalPages: number;
// 	onPageChange: (page: number) => void;
// }

// export function CustomPagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
// 	if (totalPages <= 1) return null;

// 	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

// 	return (
// 		<Pagination>
// 			<PaginationContent className="justify-center gap-4">
// 				{/* Previous */}
// 				<PaginationItem>
// 					<button
// 						onClick={() => onPageChange(currentPage - 1)}
// 						className="flex cursor-pointer items-center justify-center opacity-40 disabled:cursor-not-allowed"
// 						disabled={currentPage <= DEFAULT_PAGE}
// 					>
// 						<ChevronsLeft size={16} />
// 					</button>
// 				</PaginationItem>

// 				{/* Page Numbers */}
// 				{pages.map((page) => (
// 					<PaginationItem key={page}>
// 						<PaginationLink
// 							onClick={(e) => {
// 								e.preventDefault();
// 								onPageChange(page);
// 							}}
// 							isActive={page === currentPage}
// 							className="cursor-pointer px-2 py-1 text-xs font-medium md:text-sm"
// 						>
// 							{page}
// 						</PaginationLink>
// 					</PaginationItem>
// 				))}

// 				{/* Next */}
// 				<PaginationItem>
// 					<button
// 						onClick={() => onPageChange(currentPage + 1)}
// 						className="flex cursor-pointer items-center justify-center opacity-40 disabled:cursor-not-allowed"
// 						disabled={currentPage >= totalPages}
// 					>
// 						<ChevronsRight size={16} />
// 					</button>
// 				</PaginationItem>
// 			</PaginationContent>
// 		</Pagination>
// 	);
// }

"use client";

import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { DEFAULT_PAGE } from "@/types/http";

import { ChevronsLeft, ChevronsRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const displayedPages = React.useMemo(() => {
    const pages: (number | string)[] = [];
    const delta = 2;

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) {
      pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <Pagination>
      <PaginationContent className="justify-center gap-1 md:gap-2">
        {/* Previous */}
        <PaginationItem>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="flex cursor-pointer items-center justify-center opacity-60 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentPage <= DEFAULT_PAGE}
          >
            <ChevronsLeft size={16} />
          </button>
        </PaginationItem>

        {/* Page Numbers */}
        {displayedPages.map((page, idx) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <span className="px-2 py-1 text-gray-400">…</span>
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(Number(page));
                }}
                isActive={page === currentPage}
                className="cursor-pointer px-2 py-1 text-xs font-medium md:text-sm"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next */}
        <PaginationItem>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="flex cursor-pointer items-center justify-center opacity-60 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentPage >= totalPages}
          >
            <ChevronsRight size={16} />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
