import React from 'react'

function Player({currentSong,audio,isplaying,setIsplaying,songs,setCurrentSong}) {
    const PlayPause = () => {
    //    audio.current.play()
        setIsplaying(!isplaying)

    }

    const nextSong = () => {
        let index = songs.findIndex((song) => song.name === currentSong.name)
        if (index === songs.lenght - 1) {
            setCurrentSong(songs[0])
            setIsplaying(false)
            setTimeout(()=>{setIsplaying(true)},200)
        }
        setCurrentSong(songs[index + 1])
        setIsplaying(false)
        setTimeout(()=>{setIsplaying(true)},200)
    }
     const prevSong = () => {
        let index = songs.findIndex(song => song.name === currentSong.name)
        if (index ===  0) {
            setCurrentSong(songs[songs.lenght - 1])
            setIsplaying(false)
            setTimeout(()=>{setIsplaying(true)},200)
        }
         setCurrentSong(songs[index - 1])
         setIsplaying(false)
         setTimeout(()=>{setIsplaying(true)},200)
    }
  return (
      <>
          <div className='container text-light   fixed-bottom   ' style={{backgroundColor:'#333' ,left:'20vw'}}>
              <div className='row'>
                  <div className='col-12  p-2'>
                      <span className='d-flex justify-content-center'>  {currentSong.name} : _ <span>{currentSong.artist}</span></span>
                  
                  </div>
                  <div className='col-12    '>
                      <div className='container ' style={{width:`${currentSong.lenght}%` , height:'4px',cursor:"pointer"}}>
                          <div class="progress-stacked d-flex justify-content-start container bg-dark">
                            <div style={{width:`${currentSong.progress}%` , height:'2px',cursor:"pointer"}} class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" >
                                <div class="progress-bar"></div>
                            </div>
                         </div>
                      </div>
                      
                  </div> 
                  <div className='col-12 '>
                      <div className='d-flex justify-content-center gap-3'>
                          <span>
                              <button className='btn mb-2' onClick={prevSong}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
                                  </svg>
                              </button>
                          </span >
                          <span style={{marginBottom:'10px'}}>
                          {
                              
                              isplaying ?
                                  <>
                                       <button className='btn'  onClick={PlayPause}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-pause-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
                                        </svg>
                                        </button>
                                  </> :
                                   <>
                                    <button className='btn 'onClick={PlayPause}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                    </button>
                                  </> 
                                
                              }
                          </span>
                          
                          <span>
                              <button className='btn' onClick={nextSong}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                                 <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
                                </svg>
                               </button>
                          </span>
                      </div>
                  </div>

              </div>
          </div>
      </>
  )
}

export default Player