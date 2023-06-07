import React from 'react'
import img from '../images/montagnes.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ContextData } from '../contexts/dataContext';
import { useContext } from 'react';
import "./style.css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { redirect } from 'react-router-dom';
import { Keyboard,Pagination,Navigation } from 'swiper';

import "swiper/css/navigation";
import { Link } from 'react-router-dom';

export function PlaylistCard({data,url}) {
    return (
         <Link to={`/viewplaylist/${data.playlist_id}`} className='nav-link text-dark ' >
            <div className='card text-light p-2 overflow-hidden' style={{ height: '230px',width:'170px' , backgroundColor:'#4d4c4c81'}}>
          <img className='card-img-top' src={url} alt='' />
          <div className='card-body'>
                    <h6 className='card-title '>{ data.playlist_name}</h6>
                   
                    <p className='card-text ' style={{ fontSize: '12px' }} > {data.nb_track} chansons </p>
                    <p className='card-text ' style={{ fontSize: '10px' }}>{data.playlist_subgenre}</p>
                    
          </div>
            </div>
          </Link> 
  )
  
}

function Playlist(props) {
    const { popular } = useContext(ContextData);
    return (
        <>
            <div className='container '>
                <div className='row gap-0 '>
                    <p className='fs-3 text-light'> Recommendes pour Valere Tamwo</p>
            
                    <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[]}
                        className="mySwiper"
                        navigation={true}
                    >
                        {popular.map((item,index) => {
                            return (
                                <>
                                    <SwiperSlide key={index} >
                                        <div className='  ' style={{height:'90%',width:'190px'}}>
                                            <PlaylistCard data={item} />
                                        </div>
                                    </SwiperSlide>
                                
                                </>
                            )
                        })}
                        {/* <SwiperSlide>
                            <div className='  ' style={{height:'90%',width:'190px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'90%',width:'190px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'90%',width:'190px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'90%',width:'190px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='  ' style={{height:'90%',width:'190px'}}>
                                <PlaylistCard/>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>  
                                  
                </div>
            </div>
        </>
    )
}


export default Playlist