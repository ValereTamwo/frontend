import React from 'react'
import LogBar from './LogBar'
import arbre from '../images/arbre.jpg'

function LoadPlay(props) {
    return (
        <>
             {/* <div className=' col-12 col justify-content-end d-flex'>
                          
                            <LogBar />                
                      </div> */}
            <div className='container-fluid border-bottom border-light border-1 mb-4 '>
                <div className='row'>
                    <div className='col-3 p-2'>
                        <img className='img-fluid' src={arbre}  alt='playlist'/>
                    </div>
                    <div className='col-9 p-3'>
                        <p className='text-light' style={{fontSize:'10px'}} >
                            PLAYLIST
                        </p>
                        <p className='fw-bold text-light' style={{fontSize:'4vh'}}>
                            {props.name || 'Fresh Breeze'}
                        </p>
                        <p className='text-light' style={{fontSize:'10px'}}>valere tamwo</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default LoadPlay