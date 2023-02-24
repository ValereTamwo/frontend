import React from 'react'

function MusicTable() {
    return ( 
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>             
          <table className='table  '>
              <caption className='caption-top '> SONGS LIST</caption>
              <thead className='bg-white'>
                  <tr className=''>
                      <th>n_</th>
                      <th>songs</th>
                      <th> likes</th>
                      <th>Ajouter a une Playlist</th>
                  </tr>
                </thead>
            <tbody className='text-light'>
                <tr className=''>
                    <th>1</th>
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/3vr0IE1pCtiMfoHNl84MYX?utm_source=generator" title='1' width="210%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
                <tr className=''>
                    <th>1</th>
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/3vr0IE1pCtiMfoHNl84MYX?utm_source=generator" title='1' width="210%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
                <tr className=''>
                    <th>1</th>
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/3vr0IE1pCtiMfoHNl84MYX?utm_source=generator" title='1' width="210%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
                         </div>
                    </th>
                    <th>123 likes</th>
                    <th>choose playlist</th>
                </tr>
                <tr className=''>
                    <th>1</th>
                    <th>
                        <div class="col-12 col-md-3">    
                            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/3vr0IE1pCtiMfoHNl84MYX?utm_source=generator" title='1' width="210%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">   </iframe>
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