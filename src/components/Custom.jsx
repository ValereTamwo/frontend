import React from 'react'
import { PlaylistCard } from './PlaylistCard'
function Custom({ data,url}) {
  return (
    <section>
    <h4 className='text-light index'>
        Une Playlist Composee  rien que pour toi 
    </h4>
    <PlaylistCard data={data} url={url} />
    </section>
  )
}

export default Custom