import React from 'react'
import LogBar from './LogBar'
import arbre from '../images/arbre.jpg'
import { useContext, useEffect, useState } from 'react'
import { ContextData } from '../contexts/dataContext'
import { pexels } from './data'
import axios from 'axios'
function LoadPlay(props) {
    const [data,setData]=useState({"index":5,"playlist_name":''})
    const [list,setList]=useState([])

    const { popular, fetchData_all } = useContext(ContextData);
    useEffect(() => {
          const fetchplaylist_list = async () => {
            await axios.get("http://localhost/Kmeans/allSong.php")
                .then((res) => setList(res.data))
                .then(() => {
                    let name = list.find(list => list.playlist_id === props.id)
                    // setData({...data,"playlist_name":name.playlist_name})
                    setList([name])
                    console.log(list)
              })
          }
        // fetchplaylist_list()
        fetchData_all()
         if (props.id) {
            
             setData({
                "index":59,
                "playlist_name": "Playlist "

              });
            
            
     console.log(data);
    
    }
    }, [props.id])
    
    
    return (
        <>
             {/* <div className=' col-12 col justify-content-end d-flex'>
                          
                            <LogBar />                
                      </div> */}
            <div className='container-fluid border-bottom border-light border-1 mb-2 '>
                <div className='row'>
                    <div className='col-3 p-2'>
                        <img className='img-fluid' src={pexels[data.index].src.tiny || arbre}  alt='playlist'/>
                    </div>
                    <div className='col-9 p-3'>
                        <p className='text-light' style={{fontSize:'10px'}} >
                            {'PLAYLIST' || props.mix}
                        </p>
                        <p className='fw-bold text-light' style={{fontSize:'8vh'}}>
                            {data.playlist_name||props.name || 'Fresh Breeze'}
                        </p>
                        <p className='text-light ' style={{ textTransform:'uppercase', fontSize: '10px' }}>{JSON.parse(window.localStorage.getItem('sparkuser'))[0].username}</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default LoadPlay