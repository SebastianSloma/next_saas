import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function UserNav() {
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<Button>
				<Avatar>
					<AvatarImage />
				</Avatar>
			</Button>
		</DropdownMenuTrigger>
	</DropdownMenu>;
}
