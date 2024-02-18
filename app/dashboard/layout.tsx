import React, { ReactNode } from 'react';
import DashboardNav from '../components/DashboardNav';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import prisma from '../lib/db';

async function getData({
	email,
	id,
	firstName,
	lastName,
	profileImage,
}: {
	email: string;
	id: string;
	firstName: string | undefined | null;
	lastName: string | undefined | null;
	profileImage: string | undefined | null;
}) {
	const user = await prisma;
}

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	const { getUser } = getKindeServerSession();
	const user = await getUser;
	if (!user) {
		return redirect;
	}
	return (
		<div className='flex flex-col space-y-6 mt-10'>
			<div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
				<aside className='hidden w-[200px] flex-col md:flex'>
					<DashboardNav />
				</aside>
				<main>{children}</main>
			</div>
		</div>
	);
}
