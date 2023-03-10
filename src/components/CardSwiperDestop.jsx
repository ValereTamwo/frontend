import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { PlaylistCard } from "./PlaylistCard";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function CardSwiperDestop(props) {
  return (
    <>
      <h3 className="text-light">Recommandes pour Herman Motcheyo</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
        <div className='  ' style={{height:'100%',width:'200px'}}>
            <PlaylistCard/>
                </div>
        
    </SwiperSlide>
            <SwiperSlide>
            <div className='' style={{height:'100%',width:'200px'}}>
                <PlaylistCard/>
        
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='' style={{height:'100%',width:'200px'}}>
                <PlaylistCard/>                        
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='' style={{height:'100%',width:'200px'}}>
                      <PlaylistCard/>                   
                  </div>
            </SwiperSlide>
</Swiper>
    </>
  );
}
