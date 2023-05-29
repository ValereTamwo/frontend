import React from 'react'
import LogBar from './LogBar'
import arbre from '../images/arbre.jpg'
import { useContext, useEffect, useState } from 'react'
import { ContextData } from '../contexts/dataContext'
import { pexels } from './data'
function LoadPlay(props) {
    let index = 5;
    let playlist = [{"track_name":""}];
    const { popular, fetchData_all } = useContext(ContextData);
    useEffect(() => {
        fetchData_all();

    }, [])
    
    if (props.id) {
            
        playlist = popular.filter(p => p.playlist_id === props.id)[0];
        index = popular.findIndex(p => p.playlist_id === props.id);
        console.log(playlist);
    
    }
    return (
        <>
             {/* <div className=' col-12 col justify-content-end d-flex'>
                          
                            <LogBar />                
                      </div> */}
            <div className='container-fluid border-bottom border-light border-1 mb-2 '>
                <div className='row'>
                    <div className='col-3 p-2'>
                        <img className='img-fluid' src={pexels[index].src.tiny || arbre}  alt='playlist'/>
                    </div>
                    <div className='col-9 p-3'>
                        <p className='text-light' style={{fontSize:'10px'}} >
                            PLAYLIST
                        </p>
                        <p className='fw-bold text-light' style={{fontSize:'8vh'}}>
                            {playlist.playlist_name||props.name || 'Fresh Breeze'}
                        </p>
                        <p className='text-light' style={{fontSize:'10px'}}>valere tamwo</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default LoadPlay