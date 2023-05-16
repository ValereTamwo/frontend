import React from 'react'
import LogBar from '../components/LogBar'
import NavMobile from '../components/NavMobile'
import PlaylistCard from '../components/PlaylistCard'
import SIdeBar from '../components/SIdeBar'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardSwiperDestop from '../components/CardSwiperDestop'
import Profil from '../components/Profil'
import MusicList from '../components/MusicList'
import LoadPlay from '../components/LoadPlay'
import { useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { useContext } from 'react'
import { ContextData } from '../contexts/dataContext'
// import cardSwiperMobile from '../components/cardswiperMobile'
function Research(props) {

    const { popular, fetchData_all } = useContext(ContextData);

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
        fetchData_all()
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
                                      <LoadPlay name={'Recherches des Albums , Artistes , Playlists'} />
                                      <form className='form  input-group container' >
                                          <div className='col-9 form-floating'>
                                              <input type={'search'} name='search' className='form-control' />
                                              <label for='search' className='form-label'> Rechercher des Hits</label>
                                          </div>
                                          <button className='btn p-3 btn-dark'  type='submit'>
                                               <Link className='' to='/research'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="beige" class="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                </svg>
                                            </Link>
                                          
                                      </button>
                                      </form>
                                      <MusicList title={'L\'integralite des nos Hits'} data={popular} />
                                       {/* <MusicList title={'Albums par Artistes Ecoutes'} /> */}
                                    {/* <PlaylistCard /> */}
                                  
                                </div>
                                
                              </>
                              : <>
                                  <LoadPlay name={'Recherches des Albums , Artistes , Playlists'} />
                                  <form className='form input-group container mb-4'>
                                    <div className='col-8 form-floating'>
                                        <input type={'search'} name='search' className='form-control' />
                                        <label for='search' className='form-label'> Rechercher des Hits</label>
                                      </div>
                                      <button className='btn p-3 btn-dark'  type='submit'>
                                               <Link className='' to='/research'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="beige" class="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                </svg>
                                            </Link>
                                          
                                      </button>
                                      </form>
                                  <MusicList title={'L\'integralite des nos Hits'} data={popular} />
                                {/* <MusicList title={'Albums par Artistes Ecoutes'} /> */}
                                  
                                  {/* <CardSwiperDestop /> */}
                                 
                              </>
                      }
                      
                  </div>
                
                  </div>
              </div>
          </div>
   
  )
}

export default Research