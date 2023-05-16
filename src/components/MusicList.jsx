import React from 'react'
import { PlaylistCard } from './PlaylistCard'
function MusicList(props) {
  return (
      <>
          <div className='container-fluid md-mb-4'>
              <h4 className='text-light index'> {props.title}</h4>
              <div className='row '>
                  
                  {props.data.map((item) => {
                      return (
                          <>
                             <div className='col-md-2  col-6 p-2 ' >
                                  <PlaylistCard data={item}/>
                            </div> 
                          </>
                      )
                      
                  })}
{/* 
                  <div className='col-md-2  col-6 p-2 ' style={{ height: '100px'}} >
                      <PlaylistCard />
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                   <div className='col-md-2  col-6 p-2 ' style={{ height: '100px'}} >
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div>
                  <div className='col-md-2  col-6 p-2'>
                      <PlaylistCard/>
                  </div> */}
              </div>
          </div>
      </>
  )
}

export default MusicList