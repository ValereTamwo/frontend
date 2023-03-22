import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
function Profil() {

    // const user = useSelector((state)=>state.authenticate)
     const [user, setuser] = useState({})

     function fetchUserInfo() {
         fetch('http://localhost:8000/spotify/me')
             .then((res) => res.json())
           .then((data) => {
                 setuser(data);
                 console.log(data);
             })
     }

     useEffect(() => {
         fetchUserInfo()
     },[user])
  return (
    <>
        <button className='btn navbar-toggler' data-bs-toggle='collapse' data-bs-target='#btn'>
            <span className='navbar-toggler-icon' ></span>
        </button>   
      <div className='d-flex gap-4 flex-md-row   ' id='btn'>
          <button className='btn btn-secondary'>Passer a premium</button>
              <button className='btn btn-light '>{user.userName||'Valere Tamwo'}</button>
        </div>
            
     </>
  )
}

export default Profil