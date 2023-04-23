import React from 'react'

function CreatePlaylistModal() {
  return (
      <>
          <div className='modal' id='create'>
              <div className='modal-dialog'>
                  <div className='modal-content'>
                      <div className='modal-header'>    
                          <h4>Create custom playlist</h4>
                            <button className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>                         
                      </div>
                      <div className='modal-body'>
                          <h5> 
                              Fill Information 
                          </h5>
                      </div>
                  </div>
              </div>
        </div>
      </>
  )
}

export default CreatePlaylistModal