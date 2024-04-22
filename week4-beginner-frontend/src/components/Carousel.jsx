import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
          <div
            className="px-[76px] py-[36px] flex flex-col items-center gap-[12px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <img className="rounded-full border-[10px] border-[#FBB017]/[.37]"
              src="../../tugas/Responsive Web/assets/images/person-1.png" alt=""/>
              <h3 className="font-semibold text-[30px] leading-[56px] text-[#1F2A36] text-center">Harry Styles
              </h3>
              <p className="font-normal text-lg leading-7 text-[#9EA0A5] text-center">Web Developer</p>
              <p className="font-normal text-lg leading-7 text-[#46505C] text-center">Lorem ipsum dolor sit
                amet,
                consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
              </p>
          </div>
          
          <div
            className="px-[76px] py-[36px] flex flex-col items-center gap-[12px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <img className="rounded-full border-[10px] border-[#FBB017]/[.37]"
              src="../../tugas/Responsive Web/assets/images/person-1.png" alt=""/>
              <h3 className="font-semibold text-[30px] leading-[56px] text-[#1F2A36] text-center">Harry Styles
              </h3>
              <p className="font-normal text-lg leading-7 text-[#9EA0A5] text-center">Web Developer</p>
              <p className="font-normal text-lg leading-7 text-[#46505C] text-center">Lorem ipsum dolor sit
                amet,
                consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
              </p>
          </div>

          <div
            className="px-[76px] py-[36px] flex flex-col items-center gap-[12px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <img className="rounded-full border-[10px] border-[#FBB017]/[.37]"
              src="../../tugas/Responsive Web/assets/images/person-1.png" alt=""/>
              <h3 className="font-semibold text-[30px] leading-[56px] text-[#1F2A36] text-center">Harry Styles
              </h3>
              <p className="font-normal text-lg leading-7 text-[#9EA0A5] text-center">Web Developer</p>
              <p className="font-normal text-lg leading-7 text-[#46505C] text-center">Lorem ipsum dolor sit
                amet,
                consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
              </p>
          </div>
      </Slider>
    </div>

  )
}

export default Carousel