import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./SmCarousel.module.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export const SmCarousel : React.FC = () =>  {
  return (
    <div className="swiper-container fl">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png" alt=""/></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
 


{/* <div className="swiper-container">
<div className="swiper-wrapper">
    <div className="swiper-slide">
        <a href="https://juejin.im/book/5da2f9d4f265da5b81794d48/section/5da2f9d6f265da5b794f2189">
            <img src="" alt=""/>
        </a>
    </div>
</div>
<div className="swiper-pagination">
  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
  <span className="swiper-pagination-bullet"></span>
</div>
<div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>
<span className="swiper-notification"></span>
</div>  */}