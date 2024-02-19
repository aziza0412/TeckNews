'use client'
import { Categoriesdata } from '@/data';
import Link from 'next/link';
import { Input } from 'postcss'
import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const CreatePostForm = () => {
    const [link,setLinks]=useState<string[]>([])
    const [linkInput,setLinkInput]=useState<string>('')
    const addlink=(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
      e.preventDefault()
      if(linkInput.trim()!==""){
        setLinks((prev)=> [...prev,linkInput])
        setLinkInput("")
      }
    }
    const deleteLink=(i:number)=>{
        setLinks(prev=>prev.filter((_,j)=>j!==i))

    }
  return (
    <div>
     <h2>Create Post</h2>
     <form className='flex flex-col gap-3'>
        <input type='text' placeholder='Title' ></input>
        <textarea placeholder='Content'></textarea>
        {link && link.map((links,i)=>{
            return <div className='flex items-center gap-4' key={i}>
                <FaLink />
                <Link  className='link' href={links} > 
                {links} 
                 </Link>
                 <div  className='cursor-pointer' onClick={()=>{deleteLink(i) ;console.log(i)}}>
                 <MdDelete   />
                 </div>
                 </div>
        })}
        <div className='flex gap-2 '>
        
        <input type='text' className='flex-1' placeholder='add the link ' value={linkInput} onChange={(e)=>{setLinkInput(e.target.value) }} ></input> 
        <button className='btn flex items-center gap-2' onClick={addlink}><CiCirclePlus/>Add</button>
        </div>
        <select className='p-3 rounded-md border appearance-none'  >
            <option>Select a Category</option>
            {Categoriesdata && Categoriesdata.map(category=>{
                return <option key ={category.id} value={category.name}>{category.name}</option>
            })}
        </select>
        <button className='primery-btn'>Create Post</button>
     </form>
    <div className='p-3 text-red-500 font-bold'>Error message</div>
    </div>
  )
}

export default CreatePostForm
