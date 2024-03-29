import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './Themetoggle';
import { Button } from '@/components/ui/button';
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { UserNav } from './UserNav';

export async function NavBar() {
	const { isAuthenticated, getUser} = getKindeServerSession();
	const user = await getUser();

	return (
		<nav className='border-b bg-background h-[10vh] flex items-center'>
			<div className='container flex items-center justify-between'>
				<Link href='/'>
					<h1 className='font-bold text-3xl'>
						Saas <span className='text-primary'>App</span>
					</h1>
				</Link>

				<div className='flex items-center gap-x-5'>
					<ThemeToggle />
					{(await isAuthenticated()) ? (
						<UserNav
							email={user?.email as string}
							image={user?.picture as string}
							name={user?.given_name as string}
						/>
					) : (
						// <LogoutLink>
						// 	<Button>Log out</Button>
						// </LogoutLink>
						<div className='flex items-center gap-x-5'>
							<LoginLink>
								<Button>Sign In</Button>
							</LoginLink>
							<RegisterLink>
								<Button variant='secondary'>Sign Up</Button>
							</RegisterLink>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
function getUser() {
	throw new Error('Function not implemented.');
}
