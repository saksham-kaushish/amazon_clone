import React, { useState } from 'react'
import {logo} from "../../assets/index"
import {marker} from '../../assets/index'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { allItems } from '../../constants';
import {cart} from '../../assets/index'
import HeaderBottom from './HeaderBottom';

const Header = () => {
   
  const [showAll,setShowAll]=useState(false);
  

  return (
    <div className='w-full sticky top-0 z-50'>

    <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
      {/* image */}
      <div className='headerHover'>
        <img className='w-24 mt-2' src={logo} alt="logo" />
      </div>

      {/* address */}
      <div className='headerHover' >
        <div>
          <img src={marker} alt="mark" className='w-5 mt-1 mr-1 ' ></img>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='font-light '>Deliver to {"pincode"}</span>
          <div className='font-bold'>Roorkee</div>
        </div>
      </div>

      {/* search bar */}
    <div className='h-10 rounded-sm flex flex-grow relative items-center '>
        {/* all dropdown */}
        <span onClick={()=>{setShowAll(!showAll)}} className='px-1 h-[100%] flex text-black items-center bg-[rgb(212,212,212)] ${`showAll && shadow-amazonInput`} overflow-hidden hover:bg-slate-300 duration-300 cursor-pointer  rounded-tl-md rounded-bl-md '>All <span></span><ArrowDropDownIcon /></span>
        {/* dropdown */}
        {showAll && (
          <div>
            <ul className='absolute w-56 h-80 overflow-y-scroll overflow-x-hidden top-10 left-[0]  bg-white border border-black-2px  shadow-lg  shadow-slate-600 rounded-md z-10'>
              
             {
              allItems.map((item)=>{
                return(
                  <li key={item._id} className='dropHover'>{item.title}</li>
                )
              })
             }

            </ul>
          </div>
         )}
        {/* input */}
        <input type='text' placeholder="search Amazon.in" className='overflow-hidden h-[100%] text-base text-amazon_blue flex-grow outline-none border-none p-2' ></input>
        {/* search */}
        <span className='h-[100%] overflow-hidden flex items-center px-2 bg-amazon_yellow hover:bg-[#cc8b37] duration-300 cursor-pointer rounded-tr-md rounded-br-md'><SearchIcon /></span>
      </div>
      {/* sign in */}

      <div className='headerHover flex-col text-xs items-start '>
        <p>Hello,sign in</p>
        <div className='flex items-center'>
        <p className='text-nowrap font-bold text-sm'>Account & Lists</p>
        <span><ArrowDropDownIcon />
        </span>
        
        </div>



      </div>
        {/* return and orders */}
        <div className='headerHover flex-col text-xs items-start'>
          <span className='test-xs font-extralight '>Returns</span>
          <span className='font-bold text-sm '>& orders<span><ArrowDropDownIcon /></span></span>
        </div>

        {/* cart */}
        <div className='headerHover flex items-center relative'>
          <span className='w-4 h-4 absolute text-black right-[50px] bottom-[15px] font-bold bg-amazon_yellow rounded-full flex items-center justify-center'>2</span>
          <img src={cart} className='w-10'></img>
          <p>cart</p>
        </div>

      




      </div>
      <HeaderBottom />








    </div>
  )
}

export default Header
