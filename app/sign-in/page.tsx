import React from 'react'
import SignInBtn from '../conponents/SignInBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
const Signin = async() => {
  const session=await  getServerSession(authOptions)
  if(session) redirect('/')
  return (
    <div>
      <SignInBtn/>
    </div>
  )
}

export default Signin
