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
import playlist from '../components/playlist.json'
function Viewplaylist(props) {
    const [recommand, setRecommand] = useState([])
    const [name, setName] = useState('')
    const {popular,fetchData,fetchData_all , musics} = useContext(ContextData);

  const audioelm = useRef()

  const [music, setMusic] = useState([])
  const [isplaying, setIsplaying] = useState(false)
  const [currentSong, setCurrentSong] = useState({})

    const authUserRedux = useSelector((state) => state.authenticate  )
    const [mobile, setmobile] = useState(false)

    function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setmobile(true);
        }
      
    }

    const Save_Hit = async(user, idmusic) => {
        await axios.get(`http://localhost/Kmeans/save_hit.php?user=${user}&idmusic=${idmusic}`)
        .then((res)=>{console.log(res.data)})
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

            // On va faire une requete ici pour insere la musique acheve dans la bd et faire des recommandations personnalisee avev
            Save_Hit(JSON.parse(window.localStorage.getItem('sparkuser'))[0].id,currentSong.track_id)
        }
        // console.log(currentSong)
    }

    const FetchRecommand = async (id) => {
            await axios.get(`http://localhost/Kmeans/KNN-PHP/recommand.php?id=${id}`)
                .then((res) => { setRecommand(res.data); })
                
         }
    const id = useParams()

    useEffect(() => {

        fetchData_all()
        getWindowsWidth()
        
        if (isplaying) {
            audioelm.current.play()
        } else {
            audioelm.current.pause()
        }


    }, [mobile, isplaying,id.playlist_id])

    useEffect(() => {
        const RetrieveMusic = async (id) => {
            await axios.get(`http://localhost/Kmeans/musiclist.php?id="${id}"`)
                .then((res) => { setMusic(res.data); })
        }
        const Save_Inter = async(user, playlist_id) => {
            await axios.get(`http://localhost/Kmeans/save_inter.php?user=${user}&playlist_id=${playlist_id}`)
            .then((res)=>{console.log(res.data)})
        }

        RetrieveMusic(id.playlist_id)
        FetchRecommand(id.playlist_id)
        Save_Inter(JSON.parse(window.localStorage.getItem('sparkuser'))[0].id,id.playlist_id)
    },[id.playlist_id])
    
    const pl = playlist[2].data.find((song) => song.playlist_id === id.playlist_id).playlist_name;
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
                                  <LoadPlay id={id.playlist_id} name={pl} />
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