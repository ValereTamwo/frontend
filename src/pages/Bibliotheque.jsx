import React from 'react'
import LogBar from '../components/LogBar'
import NavMobile from '../components/NavMobile'
import PlaylistCard from '../components/PlaylistCard'
import SIdeBar from '../components/SIdeBar'
import { useState,useEffect } from 'react'

import CardSwiperDestop from '../components/CardSwiperDestop'
import Profil from '../components/Profil'
import MusicList from '../components/MusicList'
import LoadPlay from '../components/LoadPlay'
import { useSelector } from 'react-redux'
import { ContextData } from '../contexts/dataContext'
import { useContext } from 'react'
import axios from 'axios'
// import cardSwiperMobile from '../components/cardswiperMobile'
function Bibliotheque(props) {

    const {popular,fetchData,fetchData_all } = useContext(ContextData);

  const [recent, setRecent] = useState([])

    const authUserRedux = useSelector((state) => state.authenticate  )
    const [mobile, setmobile] = useState(false)

    function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setmobile(true);
        }
    }
    useEffect(() => {
        const Fetch_recent_playlist = async (id) => {
            await axios.get(`http://localhost/Kmeans/send_inter.php?user=${id}`)
                .then((res) => { setRecent(res.data); })
                
            }
        Fetch_recent_playlist(JSON.parse(window.localStorage.getItem('sparkuser'))[0].id)
        fetchData()
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
                          <Profil/>
                          
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
                                  <LoadPlay name={'Ta Bibliotheque Personnalisee' } />
                                      <MusicList title={'tes hits Recents'} data={recent} />
                                       <MusicList title={'Albums par Artistes Ecoutes'} data={popular} />
                                    <PlaylistCard />
                                  
                                </div>
                                
                              </>
                              : <>
                                  <LoadPlay name={'Ta Bibliotheque Personnalisee' }  />
                                  <MusicList title={'Tes Hits Recents'} data={recent}/>
                                <MusicList title={'Albums par Artistes Ecoutes'} data={popular}/>
                                  
                                  {/* <CardSwiperDestop data={popular} /> */}
                                 
                              </>
                      }
                      
                  </div>
                
                  </div>
              </div>
          </div>
   
  )
}

export default Bibliotheque