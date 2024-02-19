'use client'
import { Span } from 'next/dist/trace';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
const SignInBtn = () => {
  return (
    <>
      <h1 className='text-center mt-9'>Sign in</h1>  
      <div className='mt-4 p-4 flex flex-col items-center justify-center gap-4'>
    <button className='flex items-center  border  
    rounded-full  p-4 gap-4 hover:bg-slate-100/40 transition '>
    <span >
   <FaGithub  onClick={()=>signIn('github')} style={{ width: '30px', height: '30px' }} /> 
    </span>
    Sign in With Github
    </button>
    <button className='flex items-center  border  rounded-full  
    p-4 gap-4 hover:bg-slate-100/40 transition '>
    <span >
   <FcGoogle onClick={()=>signIn('google')}  style={{ width: '30px', height: '30px' }} /> 
    </span>
    Sign in With Google
    </button>
      </div>
    </>
  )
}

export default SignInBtn
