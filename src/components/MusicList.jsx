import React from 'react'
import { PlaylistCard } from './PlaylistCard'
function MusicList() {
  return (
      <>
          <div className='container-fluid mb-4'>
              <h4 className='text-light index'> Decouvrez les hits Tendances du moment</h4>
              <div className='row '>
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
                  </div>
              </div>
          </div>
      </>
  )
}

export default MusicList