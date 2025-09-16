import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

import serviceHighlights from '@/data/service/data.json' assert { type: 'json' };

const ServiceHighlights = () => {
	return (
		<div className="border bg-white p-2.5">
			<div className="border-primary-default divide-y border">
				{serviceHighlights.map((section, index) => (
					<div key={index} className="flex items-center gap-3 p-2.5">
						<Image src={section.icon} alt="Service Icon" width={40} height={40} className="object-contain" />

						<div className="flex flex-col gap-1">
							<h3 className="text-xs font-medium text-[#42495B] md:text-sm">{section.title}</h3>
							<ul className="space-y-2">
								{section.items.map((item, idx) => (
									<li key={idx} className="text-xs text-[#42495B] md:text-sm" dangerouslySetInnerHTML={{ __html: item }} />
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceHighlights;
