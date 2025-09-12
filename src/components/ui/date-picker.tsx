'use client';

import * as React from 'react';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { cn } from '@/utils/style';
import { formatDate } from 'date-fns';

interface DatePickerProps {
	label?: string;
	value: Date | undefined;
	onChange: (date: Date | undefined) => void;

	placeholder?: string;

	buttonClassName?: string;

	required?: boolean;

	icon?: React.ReactNode;

	/**
	 * Date format using date-fns format tokens
	 * Examples:
	 * - 'dd/MM/yyyy' -> 03/08/1997
	 * - 'MM/dd/yyyy' -> 08/03/1997
	 * - 'yyyy-MM-dd' -> 1997-08-03
	 * - 'dd MMM yyyy' -> 03 Aug 1997
	 * - 'EEEE, dd MMMM yyyy' -> Sunday, 03 August 1997
	 */
	displayFormat?: string;
	disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
	label,
	value,
	onChange,
	buttonClassName,
	placeholder = 'Select date',
	required = false,
	icon = <CalendarIcon className="h-4 w-4" />,
	displayFormat,
	disabled = false,
}) => {
	const [open, setOpen] = React.useState(false);

	const formatDisplayDate = React.useCallback(
		(date: Date) => {
			if (displayFormat) {
				return formatDate(date, displayFormat);
			}
			return date.toLocaleDateString();
		},
		[displayFormat],
	);

	return (
		<div className="flex flex-col gap-2">
			{label && (
				<Label htmlFor="date" className="px-1">
					{label}
					{required && <span className="text-red-500">*</span>}
				</Label>
			)}

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" id="date" className={cn('w-48 justify-between font-normal', buttonClassName)} disabled={disabled}>
						{value ? formatDisplayDate(value) : placeholder}
						{icon}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						defaultMonth={value}
						className="rounded-md border shadow-sm"
						captionLayout="dropdown"
						mode="single"
						onSelect={(date: Date | undefined) => {
							onChange(date);
							setOpen(false);
						}}
						selected={value}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default DatePicker;
