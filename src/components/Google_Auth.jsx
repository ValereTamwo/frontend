import React from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
const client_id="944233884276-bsu4hsaqfju4sp3fuceqgsnhgam1sfo3.apps.googleusercontent.com"

function Google_Auth() {
  return (
      <div id='SignButton'>
          <GoogleLogin
              clientId={client_id}
              buttonText='Se Connecter'
              onSuccess={async(res) => {
          // setAuth(true);
          // setUser(res.profileObj);
              console.log('Sucessful Login you Credentials are : ', res.profileObj)
        //  await axios.post('http://localhost:8000/dj-rest-auth/login', { username: res.profileObj.givenName, email: res.profileObj.email, password: res.profileObj.email })
        //   .then((res)=>{window.localStorage.setItem('key_auth',res.data)})
        }}
              onFailure={(res) => { console.log('fail to login :' , res) }}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          />
    </div>  
  )
}

export default Google_Auth