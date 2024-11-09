import React from 'react'
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets/index";
const banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2750,
    arrows:false,
    appendDots: dots => (
      <div
      
        style={{
          
          position:"absolute",
          top: "90%",
          left: "43%",
          // transform: "translateX(-50%)",
          transform: "translateY(-50%)",
          width: "210px",

        }}
      >
        <ul className="flex justify-between items-center  rounded-full" > {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
      className='flex justify-center rounded-full bg-amazon_light text-white w-7 h-7 font-bold'
        style={{
          
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div className='w-full h-full'>

    <div className='w-full h-full relative'>

    <Slider {...settings}>
      <div>
      <img src={bannerImgOne} alt="bannerImgone" />
      </div>
      <div>
      <img src={bannerImgTwo} alt="bannerImgone" />
      </div>
      <div>
      <img src={bannerImgThree} alt="bannerImgone" />
      </div>
      <div>
      <img src={bannerImgFour} alt="bannerImgone" />
      </div>
      <div>
      <img src={bannerImgFive} alt="bannerImgone" />
      </div>
    </Slider>
    </div>
    </div>
  )
}

export default banner
