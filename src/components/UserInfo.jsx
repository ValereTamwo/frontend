import React from 'react'
import LogOut from './LogOut'

function UserInfo({user}) {
  return (
      <>
          <section class="offcanvas offcanvas-end bg-light text-dark" id="create">
                <div class="offcanvas-header">
                    <h2 className="h3 fw-bold    offcanvas-title">Personnal User Info</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
              <div className="offcanvas-body ">
                  <img src={user.imageUrl} alt={user.givenName} className='img-fluid ' />
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">email</label>
                            <div  className="form-control" name="username" id="username">{user.email}</div>
                      </div>
                       <div className="mb-3">
                            <label for="username" className="form-label">first Name</label>
                            <div  className="form-control" name="username" id="username">{user.familyName}</div>
                        </div>
                         <div className="mb-3">
                            <label for="username" className="form-label">last Name</label>
                            <div  className="form-control" name="username" id="username">{user.givenName}</div>
                        </div>
                        <div className="mt-4">
                            <label for="username" className="form-label "></label>
                            
                         <LogOut/>
                            
                        </div>
                        
                    </form>
                 </div>
            </section>
      </>
  )
}

export default UserInfo