import React from 'react'
import { urlFor } from '@/client'
const Gprod = ({data:{image , name}}) => {
  return (
    <div className='p-2 m-8 border border-orange-400 w-60 flex flex-col space-y-2 rounded-md'>
       <div className="relative ">
          <img src={urlFor(image)} alt='product image' layout='fill'  className='rounded-md h-52 w-56 object-cover'/>
       </div>
       <div className="">
          <p className='text-sm text-slate-600'>Bride design rwanda</p>
          <h4 className='font-semibold text-md'>{name}</h4>
       </div>
    </div>
  )
}

export default Gprod