import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const SideNavbarPart = ({data}) => {
    
  // const [val,setval]= useState(false);

  return (
    <div>
    <p className='px-4 py-2 text-xl font-'>{data.heading}</p>
    
        {data.subHeading.map((value,index)=>{
            return <div key={index} className='sideHover flex justify justify-between'>
              <span>{value}</span>
              {data.more &&
              <span className='opacity-25 hover:opacity-75'>< KeyboardArrowRightIcon /></span>}
              </div>
        })}
     
    
    <div className='h-[1px] bg-slate-400 w-full'></div>

    </div>
  )
}

export default SideNavbarPart
