import React from 'react'
import { Link } from 'react-router-dom'

function CustomCard({id}) {
    const userId = JSON.parse(window.localStorage.getItem('sparkuser'))[0].id;
    const url = "https://images.pexels.com/photos/2403054/pexels-photo-2403054.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  return (
    <Link to={`/mix${id}/${userId}`} className='nav-link text-dark ' >
        <div className='card text-light p-2 overflow-hidden hover_effect '  style={{ height: '270px',width:'200px' , backgroundColor:'#4d4c4c81'}}>
          <img className='card-img-top' src={url} alt='' />
          <div className='card-body'>
          <h6 className='card-title '>🎇️✨️ MON MIX PERSONNEL {id}🎤️🎧️</h6>
                   
                    <p className='card-text ' style={{ fontSize: '12px' }} > No limit   </p>
                    <p className='card-text ' style={{ fontSize: '10px' }}>Mix</p>
                    
          </div>
            </div>
            </Link> 
  )
}

export default CustomCard