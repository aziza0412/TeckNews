'use client'
import Link from 'next/link'
import React, { useState,useRef, useEffect } from 'react'
import { useSession,signOut} from 'next-auth/react'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import Image from 'next/image'

const NavBar = () => {

  const {status,data:session}=useSession()
  const [display,setDesplay]=useState(false)
  const popREf= useRef <HTMLDivElement| null> (null)
  useEffect(()=>{
    const handelClickOUtside=(e:MouseEvent)=>{
      if(popREf.current && popREf.current.contains(e.target as Node)){
        setDesplay(false)
      }

    }
    document.addEventListener('click',handelClickOUtside)
    if(!display) {
      document.removeEventListener("click",handelClickOUtside)
    }
    return ()=>{
      document.removeEventListener("click",handelClickOUtside)
    }

  },[display])

  return (
    <div className='flex justify-between pb-4 border-b mb-4 relative'>
    <div><Link href={'/'}><h1 className='text-dark text-4xl font-bold tracking-tighter'>Teck news</h1></Link>
    <p className='text-sm'>Exploring Tomorow inovation's, <br/> One byte on the time.</p>
    </div>
    {status==='authenticated'?
    <> 
   <div className='  flex flex-row'>
   <div className='  flex flex-row'>
    <Link className='hidden md:flex gap-2 items-center mr-6' href={'/create-post'}>
      Create Post
    </Link>
    <Image onClick={()=>{setDesplay(!display)}} src={session?.user?.image ||''} width={36} height={36} alt='profil image' 
    className='rounded-full cursor-pointer'/>
    </div>
    <div ref={popREf} className ={` z-30 right-0 top-20 bg-white p-6 shadow-lg rounded-md flex flex-col gap-2 text-right min-w-[160px]
   ${display? 'flex':'hidden' }`}>
    <button onClick={()=>signOut()} className='btn absolute '>Sign out</button>
    </div>
    </div>
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
