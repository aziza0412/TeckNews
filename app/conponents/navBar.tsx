import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between pb-4 border-b mb-4'>
    <div><Link href={'/'}><h1 className='text-dark text-4xl font-bold tracking-tighter'>Teck news</h1></Link>
    <p className='text-sm'>Exploring Tomorow inovation's, <br/> One byte on the time.</p>
    </div>
    <div className='flex items-center'>
        <Link className='btn' href={'/sign-in'}>
        sign in
        </Link>
        </div>
    </div>
  )
}

export default NavBar
