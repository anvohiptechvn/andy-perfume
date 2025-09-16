import React from 'react';

import usageGuide from '@/data/usage-guide/data.json' assert { type: 'json' };

const UsageGuide = () => {
	return <div className="prose prose-sm max-w-none text-xs leading-relaxed text-[#42495B] md:text-sm" dangerouslySetInnerHTML={{ __html: usageGuide.html }} />;
};

export default UsageGuide;
