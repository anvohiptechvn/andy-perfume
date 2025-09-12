'use client';

import { LoaderCircle } from 'lucide-react';

import { cn } from '@/utils/style';

export default function Spinner({ className }: { className?: string }) {
	return <LoaderCircle className={cn('h-3 w-3 animate-spin text-gray-100', className)} />;
}
