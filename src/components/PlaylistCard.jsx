import React from 'react'
import img from '../images/montagnes.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import { Keyboard,Pagination,Navigation } from 'swiper';

import "swiper/css/navigation";
import { Link } from 'react-router-dom';

export function PlaylistCard(props) {
    return (
        <Link to='/viewplaylist' className='nav-link text-dark ' >
            <div className='card  p-2' style={{ height: '230px' , backgroundColor:'beige'}}>
          <img className='card-img-top' src={img} alt='' />
          <div className='card-body'>
              <h6 className='card-title '> Fresh Breeze</h6>
              <p className='card-text ' style={{fontSize:'10px'}} > Dadju , Niska , Black M (26 chansons) </p>
          </div>
            </div>
        </Link>
  )
  
}

function Playlist(props) {
    return (
        <>
            <div className='container'>
                <div className='row gap-0 '>
                    <p className='fs-3 text-light'> Recommendes pour Herman Motcheyo</p>
            
                    <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='  ' style={{height:'90%',width:'200px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'100%',width:'200px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'100%',width:'200px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'100%',width:'200px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'100%',width:'200px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                    </Swiper>  
                                  
                </div>
            </div>
        </>
    )
}


export default Playlist