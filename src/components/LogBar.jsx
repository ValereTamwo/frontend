import React from 'react'
import { useDispatch } from 'react-redux'
import { authuser } from '../redux/redux'
function LogBar() {

  const dispach = useDispatch()

    return (
    <>
        {/* <button className='btn navbar-toggler' data-bs-toggle='collapse' data-bs-target='#btn'>
            <span className='navbar-toggler-icon' ></span>
        </button>    */}
      <div className='d-flex gap-4 flex-md-row  mt-2 ' id='btn'>
          <button className='btn btn-secondary'>Passer a premium</button>
          <button className='btn btn-light' onClick={() => {
            dispach(authuser(''))
          }}>Se Connecter</button>
        </div>
            
     </>
  )
}

export default LogBar