'use client'
import Link from 'next/link'
import React from 'react'
import { useSession,signOut} from 'next-auth/react'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import Image from 'next/image'

const NavBar = () => {

  const {status,data:session}=useSession()
  return (
    <div className='flex justify-between pb-4 border-b mb-4 relative'>
    <div><Link href={'/'}><h1 className='text-dark text-4xl font-bold tracking-tighter'>Teck news</h1></Link>
    <p className='text-sm'>Exploring Tomorow inovation's, <br/> One byte on the time.</p>
    </div>
    {true?
    <> 
   <div>
    <Link className='hidden md:flex gap-2 items-center mr-6' href={'/create-post'}>
      Create Post
    </Link>
    <Image src={session?.user?.image ||''} width={36} height={36} alt='profil image' 
    className='rounded-full cursor-pointer'/>
    </div>
    <div>
    <button onClick={()=>signOut()} className='btn absolute '>Sign out</button></div>
    </>
    :
     <div className='flex items-center'>
        <Link className='btn' href={'/sign-in'}>
        sign in
        </Link>
        </div> }
   
    </div>
  )
}

export default NavBar
