import React from 'react'

function MusicTable() {
    const playlist = 
    return ( 
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>             
          <table className='table  '>
              <caption className='caption-top '> SONGS LIST</caption>
              <thead className='bg-white'>
                  <tr className=''>

                      <th>songs</th>
                      <th> likes</th>
                      <th>Ajouter a une Playlist</th>
                  </tr>
                </thead>
            <tbody className='text-light'>
                <tr className=''>
                    
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/4Oun2ylbjFKMPTiaSbbCih?utm_source=generator" title='1' width="210%" height="90" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
                <tr className=''>
                    
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/35mvY5S1H3J2QZyna3TFe0?utm_source=generator" title='1' width="210%" height="90" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
                <tr className=''>
                    
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/47EiUVwUp4C9fGccaPuUCS?utm_source=generator" title='1' width="210%" height="90" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
                <tr className=''>
                    
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/4Oun2ylbjFKMPTiaSbbCih?utm_source=generator" title='1' width="210%" height="90" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default MusicTable