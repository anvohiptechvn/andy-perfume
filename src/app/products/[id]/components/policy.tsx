import React from 'react';

import policy from '@/data/policy/data.json' assert { type: 'json' };

const Policy = () => {
	return <div className="prose prose-sm max-w-none text-xs leading-relaxed text-[#42495B] md:text-sm" dangerouslySetInnerHTML={{ __html: policy.html }} />;
};

export default Policy;
