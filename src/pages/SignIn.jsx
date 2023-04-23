import React from 'react'
import wel from '../images/720x480_.jpg'
import ArtistList from '../components/ArtistList'

function SignIn() {
    return (
      <div style={{height:'100vh',width:'100vw'}}>
      <div className='container pt-md-5 text-white   '>
          <main className='row'>
              <section className='col-md-6 col-12 p-2 bg- border rounded border-warning'>
                  <h2 className='d-flex justify-content-center fs-md-1'>Creer un Compte</h2>
                  <label className=''>
                      Pret a te plonger dans l'univers de la song ?? oui ? Alors Rejoins nous vite...
                  </label>
                  <div className='d-flex justify-content-center' style={{ height: "150px",width:"150px",borderRadius:"100%",backgroundColor:'white'}}>
                      
                  </div>
                  <div className='container'>
                      <form className='form '>
                          <div className='mb-3'>
                             <label for="name">
                               Nom d'ulisateur
                            </label>
                          <input type='text' name='name ' className='form-control' required placeholder="Nom d'ulisateur"></input>
                          </div>
                           <div className='mb-3'>
                             <label for="email">
                               Votre email
                            </label>
                          <input type='email' name='email ' className='form-control' required placeholder="Votre email"></input>
                          </div>
                           <div className='mb-3'>
                             <label for="pass">
                               Choisissez un mot de passe
                            </label>
                          <input type='password' name='pass ' className='form-control' required placeholder="Nom d'ulisateur"></input>
                          </div>
                           <div className='mb-3'>
                             <label for="passC">
                               Confirmer votre Mot de Passe
                            </label>
                          <input type='text' name='passC ' className='form-control' required placeholder="Confirmer votre Mot"></input>
                          </div>    

                        <div className='mb-3'>
                             <label for="status">
                               Etes vous un(e) ? 
                              </label>
                              <select name='status' className='form-control' required>
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
                          
                        <div className='mb-3'>
                            <button type='submit' className='btn btn-light' >Envoyer</button>
                        </div>
                    </form>
                  </div>
              </section>
              <section className='col-md-6 col-12  bg-'>
                        <img src={wel} className='img-fluid' alt='welcome' />
                        <ArtistList/>
              </section>
        </main>
        </div>
    </div>
  )
}

export default SignIn