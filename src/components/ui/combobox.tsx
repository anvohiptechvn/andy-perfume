'use client';

import React, { useRef, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/utils/style';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

export interface IComboboxItem {
	value: string;
	label: string;
}

interface ComboboxProps {
	hasSearch?: boolean;

	triggerClassName?: string;

	items: IComboboxItem[];
	placeholder?: string;
	searchPlaceholder?: string;

	value: string;
	onChange: (value: string) => void;
}

const MIN_COMBOBOX_WIDTH = 200;

const Combobox: React.FC<ComboboxProps> = ({
	hasSearch = true,
	triggerClassName,
	items,
	placeholder = 'Select an item',
	searchPlaceholder = 'Search item...',
	value,
	onChange,
}) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild ref={buttonRef}>
				<Button variant="outline" role="combobox" aria-expanded={open} className={cn('w-[200px] justify-between', triggerClassName)}>
					{value ? items.find((item) => item.value === value)?.label : placeholder}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0" style={{ width: buttonRef?.current?.clientWidth || MIN_COMBOBOX_WIDTH }}>
				<Command
					filter={(value, search) => {
						const item = items.find((i) => i.value === value);
						if (!item) return 0;
						return item.label.toLowerCase().includes(search.trim().toLowerCase()) ? 1 : 0;
					}}
				>
					{hasSearch && <CommandInput placeholder={searchPlaceholder} className="h-9" />}
					<CommandList>
						<CommandEmpty>No item found.</CommandEmpty>
						<CommandGroup>
							{items.map((item) => (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={(currentValue) => {
										onChange(currentValue === value ? '' : currentValue);
										setOpen(false);
									}}
								>
									{item.label}
									<Check className={cn('ml-auto', value === item.value ? 'opacity-100' : 'opacity-0')} />
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default Combobox;
