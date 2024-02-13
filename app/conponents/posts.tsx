import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosLink } from "react-icons/io";
import DeleteButton from './DeleteButton';
interface PostProps {
    id:string,
    author:string,
    date:string,
    thambnail?:string,
    authorEmail:string,
    title:string,
    content:string,
    links?:string[],
    category:string




}
const Posts = (
    {   id,
        author,
        date,
        thambnail,
        authorEmail,
        title,
        content,
        links,
        category}:PostProps
) => {
  const isEditable=true
  return (
    <div className='mb-4 border-b border-b-300 py-8'>
     <div className='mg-4'>Posted by <span className='font-bold'>{author} on {date}</span></div>
    { thambnail&& <div className='w-full h-72 relative'><Image src={thambnail} alt={title } fill  className='object-cover rounded-md object-center'/></div>}
    {category&& <Link className='bg-slate-800 w-fit text-white px-4 py-0.5 text-sm font-bold 
    rounded-md mt-4 block' href={`categories/${category}`}> {category}</Link>}
   
  
 <h2>{title}</h2>
 <p className='content'>{content}</p>
   {links&& (<div className='my-4 flex  flex-col gap-3' >
    {links.map((link,i)=>{return <div  className='flex gap-2 items-center' key={i}>
      <IoIosLink />
      <Link href={link} className='link'>{link}</Link></div>})}
   </div>)}
   {isEditable&&
   <div className='flex gap-3 font-bold py-2 px-4 rounded-md bg-slate-200 w-fit'>
    <Link href ={`/edit-post/${id}`}>Edit</Link>
      <DeleteButton/>
      </div>}
    </div>
  
  )
}

export default Posts
