'use client';

import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DialogWrapperProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	children: React.ReactNode;
	footer?: React.ReactNode;
	maxWidth?: string;
	maxHeight?: string;
	showDefaultFooter?: boolean;
	onCancel?: () => void;
	onConfirm?: () => void;
	confirmText?: string;
	cancelText?: string;
	confirmDisabled?: boolean;
	confirmLoading?: boolean;
	footerNote?: string;
	preventOutsideClick?: boolean;
	onEscapeKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const DialogWrapper = ({
	open,
	onOpenChange,
	title,
	children,
	footer,
	maxWidth = 'sm:max-w-[900px]',
	maxHeight = 'sm:max-h-[90vh]',
	showDefaultFooter = true,
	onCancel,
	onConfirm,
	confirmText = 'Xác nhận',
	cancelText = 'Huỷ',
	confirmDisabled = false,
	confirmLoading = false,
	footerNote,
	preventOutsideClick = false,
	onEscapeKeyDown,
}: DialogWrapperProps) => {
	const handleClose = () => {
		onOpenChange(false);
		onCancel?.();
	};

	const defaultFooter = showDefaultFooter && (
		<div className="flex w-full items-center justify-between pt-4">
			{footerNote && <p className="text-muted-foreground text-xs">{footerNote}</p>}
			<div className="ml-auto flex gap-2">
				<Button type="button" variant="outline" onClick={handleClose}>
					{cancelText}
				</Button>
				{onConfirm && (
					<Button type="button" onClick={onConfirm} disabled={confirmDisabled || confirmLoading}>
						{confirmLoading && <div className="border-background mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />}
						{confirmText}
					</Button>
				)}
			</div>
		</div>
	);

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent
				className={`${maxHeight} ${maxWidth}`}
				onInteractOutside={preventOutsideClick ? (e) => e.preventDefault() : undefined}
				onEscapeKeyDown={(e) => {
					if (onEscapeKeyDown) {
						onEscapeKeyDown(e as unknown as React.KeyboardEvent<HTMLDivElement>);
					}
				}}
			>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>

				<div className="-m-1 max-h-[calc(90vh-120px)] overflow-y-auto p-1">{children}</div>

				<DialogFooter>{footer || defaultFooter}</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
