import { useFormStatus } from 'react-dom'
import { Loader2, XIcon } from 'lucide-react'

import { Button } from './Button'

export function DeleteButton() {
	const { pending } = useFormStatus()
	return (
		<Button size='icon' variant='destructive' disabled={pending}>
			{pending ? (
				<Loader2 className='size-4 animate-spin' />
			) : (
				<XIcon className='size-4' />
			)}
		</Button>
	)
}
