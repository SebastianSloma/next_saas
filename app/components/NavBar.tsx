import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <nav className='border-b bg-background h-[10vh] flex items-center'>
        <div className='container flex items-center justify-between'>
            <Link href='/'>
                <h1>Test Nav</h1>
            </Link>

        </div>
    </nav>
  )
}
