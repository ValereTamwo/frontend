import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useRef,useEffect } from 'react'
import '../App.css'
function MusicTable({music,setIsplaying,setCurrentSong,isplaying,data}) {

    const playlist = ['1ZNv6yydR8UhsrJUURXn2OidQ-QIrYi0K',
       '1MstoEzsdCszbytYQuSHicAncyHuzVHuc',
       '1AX_kt0tAkv_EPxOByeRUMiiC-ijVBjaG', 
       '1YdqVqia2368BAKh4xMAGHIRYWE8cEW9f',
       '1Yi-9oUlk701ke6MQGvC9zYtokz-eAXVD',
      '1Yc7d5OA2Vvejckc4yBk3JrZy4pEudFEJ']
  
    return ( 
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>    
            <button className='btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            </svg>
            </button>
          <table className='table '>
              <caption className='caption-top '> SONGS LIST</caption>
              <thead className='bg-white'>
                  <tr className=''>
                      <th></th>
                      <th>songs</th>
                       <th>play</th>
                      <th> likes</th>                
                      <th>Ajouter a une Playlist</th>
                  </tr>
                </thead>
              <tbody className='text-light'>
                
               
                   {
                        music.map((song,index)=>{
                            return (
                              <tr className='' key={index}>
                                <th>{index}</th>
                                     <th>
                                      {/* <div class="col-12 col-md-3 " style={{fontSize:'15px',fontWeight:'lighter'}}>   */}
                                        {/* <ReactAudioPlayer
                                          src={`https://docs.google.com/uc?export=download&id=${id}`}
                                          autoPlay
                                          controls
                                        /> */}
                                        <span>{song.track_name} </span><br></br>
                                  <span style={{ fontSize: '10px' }}>
                                    {song.track_artist}
                                    <svg  xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'5px'}} width="16" height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
                                      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
                                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                  </span>
                                        {/* </div> */}
                                </th>
                                <th>
                                  <button className='btn'
                                    onClick={() => {
                                      if (isplaying === true) {
                                        setIsplaying(false)
                                        setCurrentSong(music[index])
                                      }
                                      setTimeout(() => { setIsplaying(true) },200)
                                    }}
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                  </svg>
                                  </button>
                                </th>
                                <th>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                                </th>
                                <th>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                        <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                                        <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                                      </svg>
                                    </th>
                               </tr>
                            )
                        })
                } 
              
                   
                
 
            </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default MusicTable