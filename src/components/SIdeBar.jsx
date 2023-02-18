import React from 'react'
import font from '../fonts/GothamBold.ttf'

function SIdeBar() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2 p-3' style={{ height: '100vh', backgroundColor: 'black' , fontFamily:{font}}}>
                        <div className='container'>
                            <span className='w-100 h-100 p-2 bg-white rounded-circle me-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                                </svg>
                            </span>
                            <span className='fw-bold text-white fs-2'>
                                Sonify
                            </span>
                        </div>
                    </div>
                </div>
    
            </div>
      </>
   
  )
}

export default SIdeBar