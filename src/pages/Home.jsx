import React from 'react'
import LogBar from '../components/LogBar'
import NavMobile from '../components/NavMobile'
import PlaylistCard from '../components/PlaylistCard'
import SIdeBar from '../components/SIdeBar'
import { useState,useEffect } from 'react'

import { playlistDesktop } from '../components/PlaylistCard'

import CardSwiperDestop from '../components/CardSwiperDestop'
import Profil from '../components/Profil'
import MusicList from '../components/MusicList'
import LoadPlay from '../components/LoadPlay'
import { useSelector } from 'react-redux'
import MusicTable from '../components/MusicTable'
import Player from '../components/Player'
import wel from '../images/720x480_.jpg'
import ArtistList from '../components/ArtistList'
import { Image } from '../components/ArtistList'
import axios from 'axios'
// import cardSwiperMobile from '../components/cardswiperMobile'
function Home(props) {


    const img = {
  'display': 'block',
  'width': '100%',
  'height': '100%',
  'object-fit': 'cover'
}
    const res = Image()
    const pexel_api = "emiNERkoveUChvp9jEmCKVs68PDTfHhF50IY9m4ZmWOKWhuDCHU9r2vI"
    const [authRx, setAuthRx] = useState({});
    const [token, setToken] = useState('');
    const authUserRedux = useSelector((state) => state.authenticate)
    const [mobile, setmobile] = useState(false)
    const [data ,setData] = useState([]) 
     

    function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setmobile(true);
        }
    }   
 
    useEffect(() => {
        const FetchData = async() => {
           const res = await axios.get('http://localhost/Kmeans/connect.php')
            setData(res.data); 
        } 
        FetchData()
        getWindowsWidth()  

        console.log(data);

    }, [mobile])
  
  return (
     
          <div className=''>
              <div className='row '>
              <div className='col-3  col-md-3 '>
                  {
                      mobile?<></>:<SIdeBar/>
                  }
                     
                  </div>
                  <div className='col-md-9 col-12'>
                      <div className='container-fluid p-2    mt-2'>
                          <div className=' col-12 col justify-content-end d-flex'>
                          {
                              token?<Profil/>:<LogBar />
                          }
                      </div>
                      <div className='container mt-3'>
                        <div className='row'>
                           { mobile? <NavMobile/>:<></>}
                        </div>
                    </div>
                  </div>
                  <div className=''>
                      {
                          mobile ?
                              <>
                                  <div className='d-flex flex-column gap-5'>
                                      <div className='container'>
                                          <span className='w-100 h-100 p-2  rounded-circle me-2' style={{backgroundColor:'#FEF49B'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#FEDC47" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                                                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                                <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                                                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                                                  
                                            </svg>
                                          </span>
                                          <span className='fs-1' style={{color:'#DD983D'}}>Music Sparks</span>

                                           <div className='container'>
                                          <div className='row'>
                                                  <dif className='col-md-8 col-12 '>
                                                       <div className='container'>
                                                      <div className='row'>
                                                          <div className=''>
                                                                  {/* <img src={wel} className='img-fluid' alt='welcome'/> */}
                                                            <ArtistList />
                                                                  
                                                          </div>
                                                      </div>
                                                  </div>
                                                      <span className='' style={mobile ? {fontSize:'30px',color:'#FFF480'} :{fontSize:'45px',color:'#FFF480'}}>Venez vibrer au rythme de la musique </span>
                                                  
                                              </dif>
                                          </div>
                                      </div>                                          
                                      </div>
                                      <div className=' container ' style={{height:'1px' , backgroundColor:'#FEDC47'}}></div>
                                      <MusicList title={'Decouvrez les hits du tendance du moment'} />
                                    <PlaylistCard />
                                    {/* <LoadPlay/> */}
                                </div>
                                
                              </>
                              : <>
                                   <div className='container mb-5'>
                                            <span className='w-100 h-100 p-2  rounded-circle me-2' style={{backgroundColor:'#FEF49B'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#FEDC47" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                                                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                                                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />        
                                            </svg>

                                        </span>
                                            <span className='fs-1 ' style={{color:'#DD983D'}}>Music Sparks</span>

                                      <div className='container'>
                                          <div className='row'>
                                              <dif className='col-md-8 col-12 '>
                                                  <div className='container'>
                                                      <div className='row'>
                                                          {/* <div className=''>
                                                              <img src={wel} alt='welcome'/>
                                                          </div> */}
                                                          <ArtistList />
                                                          {/* 
                                                          <div className='col-3' style={{height:'130px',width:'130px'}}><img alt='artist' src={res.justin} style={{display:'block',width:'100%',height:'100%',objectFit:'cover'}} className='img-fluid'/></div>
                                                          <div className='col-3' style={{height:'130px',width:'130px'}}><img alt='artist' src={res.ariana} style={{display:'block',width:'100%',height:'100%',objectFit:'cover'}} className='img-fluid'/></div>
                                                          <div className='col-3' style={{height:'130px',width:'130px'}}><img alt='artist' src={res.maroon} style={{display:'block',width:'100%',height:'100%',objectFit:'cover'}} className='img-fluid'/></div>
                                                          <div className='col-3' style={{height:'130px',width:'130px'}}><img alt='artist' src={res.halsey} style={{display:'block',width:'100%',height:'100%',objectFit:'cover'}} className='img-fluid'/></div>
                                                          <div className='col-3' style={{height:'130px',width:'130px'}}><img alt='artist' src={res.ed} style={{display:'block',width:'100%',height:'100%',objectFit:'cover'}} className='img-fluid'/></div> */}

                                                          
                                                      </div>
                                                  </div>
                                                  <span className='d-flex justify-content-center' style={{ fontSize:'30px',color:'#FFF480'}}>Venez vibrer au rythme de la musique </span>
                                                  
                                              </dif>
                                          </div>
                                      </div>
                                      
                                  </div>
                                  <MusicList title={'Decouvrez les hits du tendance du moment'} data={data} />
                                  <CardSwiperDestop />
                                  {/* <Player/> */}
                                  {/* <LoadPlay/> */}
                              </>
                      }
                      
                  </div>
                  {/* <MusicTable/> */}
                  </div>
              </div>
          </div>
   
  )
}

export default Home