import React from 'react'
import FooterBottomContent from './FooterBottomContent'

const FooterBottom = () => {
  return (
    <div className='w-full bg-fotterBottom py-8'>
      <div className='max-w-5xl mx-auto grid grid-cols-4 grid-rows-2 gap-5'>
       <FooterBottomContent />
       <FooterBottomContent />
       <FooterBottomContent />
       <FooterBottomContent />
       <FooterBottomContent />
       <FooterBottomContent />
       <FooterBottomContent />
       
      </div>
    </div>
  )
}

export default FooterBottom
