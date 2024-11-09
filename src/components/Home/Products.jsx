
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import StarIcon from "@mui/icons-material/Star"

const Products = () => {
  const data =useLoaderData();
  const productData=data.data;
  


  return (
   <div className='max-w-screen-2xl grid grid-cols-4 mx-auto gap-10'>
    {productData.map((item)=>(
      <div key={item.id} className='bg-white h-auto border-1px border-gray-200 py-6 z-30 hover:border-transparent shadow-node hover:shadow-testShadow duration-200 relative flex flex-col gap-4' >
        <div className='w-full h-auto flex items-center justify-center'>
          <img src={item.image} className='w-52 h-64 object-contain' alt='product image'></img>
        </div>
        <div className='px-4'>
        <div className='flex items-center justify-between '>
          <h1 className='text-lg font-titleFont tracking-wide text-amazon_blue font-medium '>{item.title.substring(0,25)}</h1>
          <p className=" text-sm text-gray-600 font-semibold" >${item.price}</p>
       </div>
       <div>
        <p className=' text-sm text-gray-700 '>{item.description.substring(0,100)}...</p>
       </div>
       <div >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
       </div>
       
        </div>
      </div>
  ))}
   </div>
  )
}

export default Products
