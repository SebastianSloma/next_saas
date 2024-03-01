'use client'

import { Button } from '@/components/ui/button'
import { useFormStatus} from 'react-dom'


export function SubmitButton(){
    const {pending} = useFormStatus()
    return(
        <>
        {pending ? (
            <Button disabled className='w-fit'>Please Wait</Button>
        ) :(
            <Button type='submit'>Save Now</Button>
        )}
        </>
    )
}