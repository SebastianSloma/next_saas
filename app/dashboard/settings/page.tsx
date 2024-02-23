import { Card } from '@/components/ui/card';

export default function SettingPage() {
	return (
		<div className='grid items-start gap-8'>
			<div className='flex items-center justify-between px-2'>
				<div className='grid gap-1'>
					<h1 className='text-3xl md:text-4xl'>Settings</h1>
					<p className='text-lg text-muted-foreground'>Your Profile Settings</p>
				</div>
			</div>
            <Card/>
		</div>
	);
}
