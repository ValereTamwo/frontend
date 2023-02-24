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
// import cardSwiperMobile from '../components/cardswiperMobile'
function Viewplaylist(props) {



  const [authRx, setAuthRx] = useState({})

    const authUserRedux = useSelector((state) => state.authenticate  )
    const [mobile, setmobile] = useState(false)

    function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setmobile(true);
        }
    }
    useEffect(() => {
        getWindowsWidth()
    },[mobile])
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
                              authUserRedux.auth?<Profil/>:<LogBar />
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
                                      
                                      {/* <MusicList /> */}
                                      <LoadPlay />
                                      <MusicTable/>
                                    <PlaylistCard />
                                    
                                </div>
                                
                              </>
                              : <>
                                  {/* <MusicList/> */}
                                  <LoadPlay />
                                  <MusicTable/>
                                  <CardSwiperDestop />
                                  
                              </>
                      }
                      
                  </div>
                  
                  </div>
              </div>
          </div>
   
  )
}

export default Viewplaylist