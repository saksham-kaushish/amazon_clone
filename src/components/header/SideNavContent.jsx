import { NewReleases } from '@mui/icons-material'
import React from 'react'
import SideNavbarPart from './SideNavbarPart'



const SideNavContent = () => {
    const sidebarData = [
        {
          heading:"Trending",
          subHeading:["Best Sellers","New Releases","Movers and Shakers"],
          more:false
        },
        {
          heading:"Digital Content And Devices",
          subHeading:["Best Sellers","New Releases","Movers and Shakers"],
          more:false
        }
        ,
        {
          heading:"Digital Content And Devices",
          subHeading:["Best Sellers","New Releases","Movers and Shakers"],
          more:false
        }
        ,
        {
          heading:"Digital Content And Devices",
          subHeading:["Best Sellers","New Releases","Movers and Shakers"],
          more:false
        }
        ,
        {
          heading:"Digital Content And Devices",
          subHeading:["Best Sellers","New Releases","Movers and Shakers"],
          more:false
        }
        ]
  return (
    <div className='w-full overflow-y-scroll h-'>
        {sidebarData.map((data,index)=>{
            return <SideNavbarPart key={index} data={data}/>
        })}
        
    
    </div>
  )
}

export default SideNavContent
