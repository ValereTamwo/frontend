import React from 'react'
import LogBar from '../components/LogBar'
import NavMobile from '../components/NavMobile'
import PlaylistCard from '../components/PlaylistCard'
import SIdeBar from '../components/SIdeBar'
import { useState,useEffect,useRef } from 'react'

import { playlistDesktop } from '../components/PlaylistCard'

import CardSwiperDestop from '../components/CardSwiperDestop'
import Profil from '../components/Profil'
import MusicList from '../components/MusicList'
import LoadPlay from '../components/LoadPlay'
import { useSelector } from 'react-redux'
import MusicTable from '../components/MusicTable'
import Player from '../components/Player'
import { useContext } from 'react'
import { ContextData } from '../contexts/dataContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import cardSwiperMobile from '../components/cardswiperMobile'
function Viewplaylist(props) {
    const [recommand,setRecommand]=useState([])
    const {popular,fetchData , musics} = useContext(ContextData);

const song = [
    {
      id:1,
      name: 'I am there for you',
      url:'https://docs.google.com/uc?export=download&id=1Yi-9oUlk701ke6MQGvC9zYtokz-eAXVD',
      artist:'Justin Beiber feat Alonzo'
    },
    {
      id:2,
      name: ' Memories',
      url:'1ZNv6yydR8UhsrJUURXn2OidQ-QIrYi0K',
      artist:'Marrons - track'
    },
     {
      id:3,
      name: 'The continent of the planet with the alphabet',
      url:'https://docs.google.com/uc?export=download&id=1YdqVqia2368BAKh4xMAGHIRYWE8cEW9f',
      artist:'tutu mimi'
    }
  ]
  const audioelm = useRef()

  const [music, setMusic] = useState([])
  const [isplaying, setIsplaying] = useState(false)
  const [currentSong, setCurrentSong] = useState({})


    
    
  const [authRx, setAuthRx] = useState({})

    const authUserRedux = useSelector((state) => state.authenticate  )
    const [mobile, setmobile] = useState(false)

    function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setmobile(true);
        }
      
    }

    const onPlaying = () => {
        const duration = audioelm.current.duration;
        const currenttime = audioelm.current.currentTime
        setCurrentSong({ ...currentSong, "progress": currenttime / duration * 100, "lenght": duration })
        
        if (currenttime === duration) {
            let index = music.findIndex(song => song.track_id === currentSong.track_id)
            setIsplaying(false)
            setCurrentSong(music[index + 1])
            setTimeout(()=>{setIsplaying(true)},200)
        }
        // console.log(currentSong)
    }

    const FetchRecommand = async (id) => {
            await axios.get(`http://localhost/Kmeans/KNN-PHP/recommand.php?id=${id}`)
                .then((res) => { setRecommand(res.data); })
                
         }
    const id = useParams()

    useEffect(() => {

     
        fetchData()
        // fetchMusic()
         const RetrieveMusic = async (id) => {
            await axios.get(`http://localhost/Kmeans/musiclist.php?id="${id}"`)
                .then((res) => { setMusic(res.data); })
         }
        // setCurrentSong(music[0])
        FetchRecommand(id.playlist_id)
        RetrieveMusic(id.playlist_id)
        getWindowsWidth()
        console.log(id.playlist_id)
        // setCurrentSong(music[0])
        if (isplaying) {
            audioelm.current.play()
        } else {
            audioelm.current.pause()
        }


    }, [mobile, isplaying])
    
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
                                      <MusicTable music={music}  isplaying={isplaying} setIsplaying={setIsplaying}  setCurrentSong={setCurrentSong}/>
                                      <PlaylistCard />
                                  {/* <audio src={currentSong.url} ref={audioelm} onTimeUpdate={onPlaying} /> */}
                                      
                                  {/* <Player songs={music} setCurrentSong={setCurrentSong} setSong ={setMusic}  isplaying={isplaying} setIsplaying={setIsplaying} currentSong={currentSong} audio={audioelm} /> */}
                                    
                                </div>
                                    <audio src={`https://docs.google.com/uc?export=download&id=${currentSong.track_id}`} ref={audioelm} onTimeUpdate={onPlaying} />
                                    <Player songs={music} setCurrentSong={setCurrentSong} setSong ={setMusic}  isplaying={isplaying} setIsplaying={setIsplaying} currentSong={currentSong} audio={audioelm} />
                                  
                              </>
                              : <>
                                  {/* <MusicList/> */}
                                  <LoadPlay id={id.playlist_id} />
                                  z
                                  <MusicTable music={music} track={id.track_id} isplaying={isplaying} setIsplaying={setIsplaying}  setCurrentSong={setCurrentSong} />
                                  <div className='' style={{ marginBottom:'100px'}}>
                                  <CardSwiperDestop data={recommand} />          
                                  </div>
                                  <p>{currentSong.track_id}</p>
                                  
                                  <audio src={`https://docs.google.com/uc?export=download&id=${currentSong.id }`} ref={audioelm} onTimeUpdate={onPlaying} />
                                  <Player songs={music} setCurrentSong={setCurrentSong} setSong={setMusic} isplaying={isplaying} setIsplaying={setIsplaying} currentSong={currentSong} audio={audioelm}      />
                              </>
                      }
                      
                  </div>
                  
                  </div>
              </div>
          </div>
   
  )

}

export default Viewplaylist