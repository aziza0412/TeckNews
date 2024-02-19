import postsData from '@/data'
import React from 'react'
import Posts from '../conponents/posts'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const session=await  getServerSession(authOptions)
  if(!session) redirect('/sign-in')
  return (
    <div className='py-6'>
      <h1 className='text-center font-bold text-2xl mt-9'>My posts</h1>
      { postsData && postsData.length>0 ?
   (postsData.map((post)=> <Posts key={post.id} 
        id={post.id}
        author={post.author}
        date={post.datePublished}
        thambnail='https://lynkbooster.com/wp-content/uploads/2021/04/generateur-app-sans-developpeur-700x423-1-e1619712125455.jpg'
        authorEmail= 'test@gmail.com'
        title={post.title}
        content={post.content}
        links={post.links||[]}
        category={post.category}
        />)) 
   :<div>there is no post,    
    <Link className='underline' href={'/create-post'}>Create New</Link></div>}
    </div>
  )
}

export default DashboardPage
