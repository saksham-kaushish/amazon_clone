import React, { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { titleList } from '../../constants';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SideNavContent from './SideNavContent';
import SideNavbarPart from './SideNavbarPart';
import { sidebarData } from '../../constants';
import {easeInOut, motion,AnimatePresence} from 'framer-motion';

const HeaderBottom = () => {
   const [sidebar,setSidebar] = useState(false);

  return (
    <>

    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center j relative gap-2'>
    {/* all */}
    <div className='flex justify-between headerHover items-center gap-1 ' onClick={()=>setSidebar(!sidebar)}>
      <span className=''><MenuSharpIcon /></span>
      <p className='font-bold font-titleFont'>All</p>
    </div>

    

    {
      titleList.map((title,index)=>{
        return(
          <div key={index} className='flex  headerHover items-center gap-1 '>
            
            <p className=' font-titleFont text-nowrap  text-sm'>{title.title}</p>
            {title.drop && (< ArrowDropDownIcon />)}
          </div>
        )
      })
    }
    
    
    </div>

    <AnimatePresence>

    {sidebar && (
      <div className='max-h-[100vh] w-full bg-amazon_blue absolute  top-0 left-0 bg-opacity-50  flex z-10 ' >



        <motion.div className='w-[320px] h-[100vh] bg-slate-200 sticky' initial={{x:-220}} 
        animate={{x:0}} transition={{duration:0.25,ease:easeInOut}} exit={{x:-500 }} >
        {/* hello chine in */}
          
          <div className='bg-amazon_light flex items-center justify-start text-white gap-2 py-2 px-8 h-[8%]'>
            <span><AccountCircleSharpIcon /></span>
            <p className='text-xl font-bold font-titleFont '>Hello, sign in</p>
          </div>
        {/* compnenet */}


        <div className='w-full h-[92%] overflow-y-scroll'>
          {sidebarData.map((data,index)=>{
            return <SideNavbarPart key={index} data={data}/>
          })}
        </div>


        </motion.div>
        <div className='w-[80vw] max-h-[100vh] snap-none ' onClick={()=>setSidebar(!sidebar)}></div>
        {/*  */}
       
         </div>
    )}
    </AnimatePresence>
    </>




    
    )

}


export default HeaderBottom
