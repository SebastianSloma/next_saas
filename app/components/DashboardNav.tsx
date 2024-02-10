'use client';

import React from 'react';
import { CreditCard, Home, Settings } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const navItems = [
	{ name: 'Home', href: '/dashboard', icon: Home },
	{ name: 'Setting', href: '/dashboard/settings', icon: Settings },
	{ name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
];

const DashboardNav = () => {
	return (
		<nav className='grid items-start gap-2'>
			{navItems.map((item, index) => (
				<Link key={index} href={item.href}>
					<span className={cn()}>
						<item.icon className='mr-2 h-4 w-4' />
						<span>{item.name}</span>
					</span>
				</Link>
			))}
		</nav>
	);
};

export default DashboardNav;
