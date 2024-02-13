import React from 'react'
import {Categoriesdata} from '../../data'
import Link from 'next/link'

const CategoriesList = () => {
  return (
    <div className='flex gap-2 text-sm flex-wrap'>
      {Categoriesdata && Categoriesdata.map(
        (categori)=>{return <Link  className='px-4 py-1 rounded-md bg-slate-900 text-white cursor-pointer' href={`/categorie/${categori.name}`}>{categori.name}</Link>})}
    </div>
  )
}

export default CategoriesList
