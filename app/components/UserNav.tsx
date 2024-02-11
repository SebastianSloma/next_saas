import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { CreditCard, Home, Settings } from 'lucide-react';

export const navItems = [
	{ name: 'Home', href: '/dashboard', icon: Home },
	{ name: 'Setting', href: '/dashboard/settings', icon: Settings },
	{ name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
];

export function UserNav() {
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<Button variant='ghost' className='relative h-10 rounded-full'>
				<Avatar className='h-10 w-10 rounded-full'>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>Test Name</AvatarFallback>
				</Avatar>
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent className='w-56' align='end' forceMount>
			<DropdownMenuLabel>
				<div className='flex flex-col space-y-1'>
					<p className='text-sm font-medium leading-none'>Test Name</p>
					<p className='text-xs leading-none text-muted-foreground'>
						test@name.com
					</p>
				</div>
			</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				{navItems.map((item, index) => (
					<DropdownMenuItem asChild key={index}>
						<Link
							href={item.href}
							className='w-full flex justify-center items-center'>
							{item.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>;
}
