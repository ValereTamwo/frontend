import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ariana from '../images/star/ariana.jpeg';
import justin from '../images/star/justinbeiber.jpeg'
import halsey from '../images/star/halsey.jpeg'
import maroon from '../images/star/maroons.jpeg'
import zara from '../images/star/zaralarson.jpeg'
import ed from '../images/star/edsheeran.jpeg'
import catty from '../images/star/catty perry.jpeg'



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './style/styles.css'

export function Image() {
    return({ariana,justin,halsey,maroon,zara,ed,catty})
}

function ArtistList() {
  return (
     <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={justin} alt='justin beiber' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={ariana} alt='ariana grande' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={halsey} alt='halsey' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={maroon} alt='maroons' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={zara} alt='Zara Larson' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={ed} alt='Ed Sheran' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={catty} alt='Catty perry' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={justin} alt='justin beiber' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={justin} alt='justin beiber' className='img-fluid'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default ArtistList