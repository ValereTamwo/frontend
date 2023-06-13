import React from 'react'
import { useState , useRef} from 'react'
import axios from 'axios'
function SignIn() {

  const name = useRef()
  const email = useRef()
  const pass = useRef()
  const passC = useRef()
  const status = useRef()

  const [account, setAccount] = useState(false);
  const QueryData = async (name,pass,email,status) => {
    await axios.get(`http://localhost/Kmeans/enregistrement.php?name=${name}&email=${email}&status=${status}&pass=${pass}`)
      .then((res) => {
        window.localStorage.setItem('sparkuser', JSON.stringify(res.data));
        window.localStorage.setItem('account', true);
      })
      .then(() => {
        window.location.replace('/');
      })
  }
    return (
      <div style={{height:'100vh',width:'100vw'}}>
      <div className='container pt-md-5 text-white   '>
          <main className='row d-flex justify-content-center'>
              <section style={{backgroundColor:'#333',padding:'20px'}} className='col-md-5 col-12  bg- border rounded border-dark'>
              <h2 className='d-flex justify-content-center fs-md-1'>
                <span className='w-30 h-100 p-2 bg-warning rounded-circle me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                        </svg>
                    </span> Music Sparks</h2>
                  <label className=''>
                      Pret a te plonger dans l'univers de la song ?? oui ? Alors Rejoins nous vite...
                  </label>
                 <span style={{fontSize:'11px',cursor:'pointer'}} className='d-flex justify-content-center mb-3'>Vous avez deje un compte ? <span className='text-warning ' onClick={()=>{setAccount(!account)}}>cliquez ici</span></span>
              {account ?
                <>
                  <div style={{ borderRadius: '10px', backgroundColor: '', padding: '19px' }} className='container border '>
                  <span className='fs-4 text-warning justify-content-center d-flex'>Se Connecter</span>
                  <form className='form '>
                  
                    <div className='mb-3'>
                      <label for="email1">
                        Votre email
                      </label>
                      <input type='email' name='email1 ' className='form-control' required placeholder="Votre email"></input>
                    </div>
                    <div className='mb-3'>
                      <label for="pass1">
                        mot de passe
                      </label>
                      <input type='password' name='pass1 ' className='form-control' required placeholder="Nom d'ulisateur"></input>
                    </div>
                            
                    <div className='mb-3 d-flex justify-content-end'>
                      <button type='submit' className='btn btn-light' >Envoyer</button>
                    </div>
                  </form>
                </div>
                </>
                :
                <div style={{ borderRadius: '10px', backgroundColor: '', padding: '19px' }} className='container border '>
                <span className='fs-4 text-warning justify-content-center d-flex'>S'inscrire</span>
                <form className='form '>
                  <div className='mb-3'>
                    <label for="name">
                      Nom d'ulisateur
                    </label>
                    <input  ref={name} type='text' name='name ' className='form-control' required placeholder="Nom d'ulisateur"></input>
                  </div>
                  <div className='mb-3'>
                    <label for="email">
                      Votre email
                    </label>
                    <input ref={email} type='email' name='email ' className='form-control' required placeholder="Votre email"></input>
                  </div>
                  <div className='mb-3'>
                    <label for="pass">
                      Choisissez un mot de passe
                    </label>
                    <input ref={pass} type='password' name='pass ' className='form-control' required placeholder="Nom d'ulisateur"></input>
                  </div>
                  <div className='mb-3'>
                    <label for="passC">
                      Confirmer votre Mot de Passe
                    </label>
                    <input  ref={passC} type='text' name='passC ' className='form-control' required placeholder="Confirmer votre Mot"></input>
                  </div>

                  <div className='mb-3'>
                    <label for="status">
                      Etes vous un(e) ?
                    </label>
                    <select name='status' ref={status} className='form-control' required>
                      <option>
                        Artiste
                      </option>
                      <option>
                        Maison d'edition
                      </option>
                      <option>
                        Autres
                      </option>
                    </select>
                  </div>
                          
                  <div className='mb-3 d-flex justify-content-end'>
                      <button type='submit' className={'btn btn-light'}
                        onClick={(event) => { 
                          event.preventDefault();
                          QueryData(name.current.value, passC.current.value, email.current.value, status.current.value);
                        }} >
                        Envoyer
                      </button>
                  </div>
                </form>
              </div>
              }
              </section>
             
        </main>
        </div>
    </div>
  )
}

export default SignIn