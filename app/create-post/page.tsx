import React from 'react'
import CreatePostForm from '../conponents/CreatePostForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
const  CreatePost = async() => {
  const session=await  getServerSession(authOptions)
  if(!session) redirect('/sign-in')
  return (
    <div>
      <CreatePostForm/>
    </div>
  )
}

export default CreatePost
