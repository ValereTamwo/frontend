import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

function Profil() {
    const [acc, setAcc] = useState(false);
    useEffect(() => {
        if (!window.localStorage.getItem('sparkuser')) {
            window.location.replace('/signin');
        } else {
            setAcc(window.localStorage.getItem('account'));
    }
},[acc])
    // const user = useSelector((state)=>state.authenticate)
  return (
    <>
        <button className='btn navbar-toggler' data-bs-toggle='collapse' data-bs-target='#btn'>
            <span className='navbar-toggler-icon' ></span>
        </button>   
      <div className='d-flex  gap-4 flex-md-row    ' id='btn'>
          <button className='btn collapse d-md-block btn-warning'>Passer a premium</button>
              <button className='btn btn-secondary '>{acc?JSON.parse(window.localStorage.getItem('sparkuser'))[0].username:'Valere Tamwo'}</button>
        </div>
            
     </>
  )
}

export default Profil