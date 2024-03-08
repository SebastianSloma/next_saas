import { Card, CardContent } from '@/components/ui/card';

export default function BillingPage() {
	return (
		<div className='max-w-md mx-auto space-y-4'>
			<Card className='flex flex-col'>
				<CardContent className='py-8'>
					<div>
						<h3>Monthly</h3>
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
