import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SettingPage() {
	return (
		<div className='grid items-start gap-8'>
			<div className='flex items-center justify-between px-2'>
				<div className='grid gap-1'>
					<h1 className='text-3xl md:text-4xl'>Settings</h1>
					<p className='text-lg text-muted-foreground'>Your Profile Settings</p>
				</div>
			</div>
			<Card>
				<form action=''>
					<CardHeader>
						<CardTitle>General Data</CardTitle>
						<CardDescription>
							Please provide general information about yourself. Please dont
							forget to save.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-2'>
							<div className='space-y-1'>
								<Label>Your Name</Label>
								<Input
									name='name'
									type='text'
									id='name'
									placeholder='Your Name'
								/>
							</div>
							<div className='space-y-1'>
								<Label>Your Email</Label>
								<Input
									name='email'
									type='email.'
									id='email'
									placeholder='Your Email'
									disabled
								/>
							</div>

							<div className='space-y-1'>
								<Label>Color Scheme</Label>
								<Select name='color'>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Select a color' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Color</SelectLabel>
											<SelectItem value='theme'>Green</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardContent>
				</form>
			</Card>
		</div>
	);
}
