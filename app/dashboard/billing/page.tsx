import { Card, CardContent } from '@/components/ui/card';

export default function BillingPage() {
	return (
		<div className='max-w-md mx-auto space-y-4'>
			<Card className='flex flex-col'>
				<CardContent className='py-8'>
					<div>
						<h3 className='inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary'>Monthly</h3>
					</div>
					<div className='mt-4 flex items-baseline text-6xl font-extrabold'>
						30€<span className='ml-1 text-2xl text-muted-foreground'>/mo</span>
					</div>
				</CardContent>
			</Card>
			<iframe
				src='https://coin360.com/coin-widget?coin=ethereum-eth&utm_source=embed_widget_coin'
				width='100%'
				height='252'
				
			/>
		</div>
	);
}
