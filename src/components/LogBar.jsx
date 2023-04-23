import React from 'react'
import { useDispatch } from 'react-redux'
import { authuser } from '../redux/redux'

function LogBar() {

  const dispach = useDispatch()
  const Client_ID = '580706c5c8c040ca986e43a236cbe9b4';
  const Client_Secret = 'c7bc521f6e284f2b9cddee18cd095732';
  const Redirect_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = 'http://accounts.spotify.com/authorize'
  const Response_type = 'token'

    return (
    <>
        {/* <button className='btn navbar-toggler' data-bs-toggle='collapse' data-bs-target='#btn'>
            <span className='navbar-toggler-icon' ></span>
        </button>    */}
      <div className='d-flex gap-4 fixed flex-md-row  mt-2 ' id='btn'>
          <button className='btn text-light' style={{backgroundColor:'#DD983D'}}>Passer a premium</button>
          <a href={`${AUTH_ENDPOINT}?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=${Response_type}`} className='btn btn-light'>Se Connecter</a>
        </div>
            
     </>
  )
}

export default LogBar