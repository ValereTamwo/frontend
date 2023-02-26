import React from 'react'
import { Link } from 'react-router-dom'
// import font from '../fonts/GothamBold.ttf'

function SIdeBar() {
    return (
        <>
                    
                    <div className='  w-20  w-md-100  sticky-top p-3' style={{ height: '100vh', backgroundColor: 'black',width:'300px' }}>
                        <div className='container'>
                            <span className='w-100 h-100 p-2 bg-white rounded-circle me-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                                </svg>
                            </span>
                            <span className='fw-bold  text-white fs-2'>
                                Sonify
                            </span>
                            <ul className='nav expand text-light'>
                                <li className='nav-item mt-3'>
                                    <Link className='nav-link'  to='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                         <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                                        </svg>
                                        <span className='ms-2 text-light view'> Acceuil</span>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link'  to='/research'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="beige" class="bi bi-search" viewBox="0 0 16 16">
                                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                        <span className='ms-2 text-light  '>Rechercher</span>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link ' to='/biblio'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="beige" class="bi bi-collection-fill" viewBox="0 0 16 16">
                                        <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                                        </svg>
                                        <span className='ms-2 text-light view'>Bibliotheques</span>
                                        
                                        </Link>
                                </li>
                                <li className='nav-item mt-5'>
                                    <a href='/' className='nav-link'>                                       
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="beige" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                        <span className='ms-2 text-light view'> Creer une playlist</span>
                                     </a>
                                </li>
                                <li className='nav-item '>
                                    <Link to='/viewplaylist' className='nav-link'>                                       
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="beige" class="bi bi-postage-heart" viewBox="0 0 16 16">
                                        <path d="M3.5 1a1 1 0 0 0 1-1h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 1 0 2 0H15v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1h-1.5a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0H1v-1a1 1 0 1 0 0-2v-1a1 1 0 1 0 0-2V9a1 1 0 1 0 0-2V6a1 1 0 0 0 0-2V3a1 1 0 0 0 0-2V0h1.5a1 1 0 0 0 1 1ZM3 3v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
                                        <path d="M8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11Z"/>
                                        </svg>
                                    <span className='ms-2 text-light view'>  Titre Likees</span>
                                     </Link>
                                </li>
                            </ul>
                            <hr className='bg-light' style={{ height: '2px' }} />
                            <div className='d-flex flex-column container  gap-3' style={{color:'azure',fontSize:'15px'}} >
                                <span> <Link className='nav-link text-light ' to='/viewplaylist'>slow francais</Link></span>
                                <span> <Link className='nav-link text-light ' to='/viewplaylist'>ma playlist n_1</Link></span>
                            </div>
                            
                        </div>
            </div>
            
 
      </>
   
  )
}

export default SIdeBar