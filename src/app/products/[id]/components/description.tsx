'use client';

import React, { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PerfumeDescriptionProps {
	content: string;
	previewHeight?: number;
}

const PerfumeDescription: React.FC<PerfumeDescriptionProps> = ({ content, previewHeight = 160 }) => {
	const [expanded, setExpanded] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className="relative">
			{/* Content */}
			<div
				ref={contentRef}
				className={`relative overflow-hidden transition-all duration-300`}
				style={{
					maxHeight: expanded ? 'none' : previewHeight,
				}}
				dangerouslySetInnerHTML={{ __html: content }}
			/>

			{!expanded && <div className="pointer-events-none absolute right-0 bottom-4 left-0 h-28 bg-[linear-gradient(to_top,white,rgba(255,255,255,0))]" />}

			<button onClick={() => setExpanded(!expanded)} className="mt-2 flex w-full items-center justify-center gap-1 text-sm font-medium text-blue-600">
				{expanded ? 'Thu gọn' : 'Xem thêm'}
				{expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
			</button>
		</div>
	);
};

export default PerfumeDescription;
