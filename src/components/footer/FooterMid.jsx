import React from 'react'
import FooterMidContent from './FooterMidContent'
import {logo,flag} from "../../assets/index"

const FooterMid = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* top */}
      <div className='w-full border-b-[1px] border-gray-500 py-10'>
        <div className='max-w-5xl mx-auto text-gray-300 '>
          <div className='w-full grid grid-cols-4 place-items-center items-start'>
          
         <FooterMidContent />
         <FooterMidContent />
         <FooterMidContent />
         <FooterMidContent />
       
          
          </div>
        </div>
      </div>
      {/* top ends */}
     {/* bottom starts */}
     <div className='w-full flex gap-6 items-center justify-center py-6'>
      <div>
        <img className='w-20 pt-3 ' src={logo} alt='logo'></img>
      </div>
      <div className='flex gap-2'>
        <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration 200 px-2 py-1'>English</p>

      </div>
      <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration 200 px-2 py-1'>
        <img className='w-6' src={flag} alt="flag"></img>
        <p>India</p>
      </div>
     </div>
    </div>
  )
}

export default FooterMid
