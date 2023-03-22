import React from 'react'

function CreatePlaylistModal() {
  return (
      <>
         <div className='modal ' id='create'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header d-flex flex-column'>
                            <h5 className='modal-title '>
                                Adoption D'une nouvelle loi au Parlement Administratif
                            </h5>
                            <button className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>

                            <div className='modal-body col-12'>

                                 <div className='card mb-3'>
                                    <img alt='img' src={''} className='card-img-top  img-fluid' />
                                    <div className='card-body'>
                                        <h5 className='card-title'> Adoption d'une nouvelle loi</h5>
                                        <p className='card-text '>
                                            la court de justice adopte suivant la constitution en vigueur une une loi 
                                        </p>
                                    </div>
                                </div>
                                <div className='accordion '>
                                    <div className='accordion-item'>
                                        <h2 className='accordion-header'>
                                            <button className='  btn accordion-button' data-bs-toggle='collapse' data-bs-target='#accord1'> lire
                                            </button>
                                        </h2>
                                        <div className='collapse show accordion-collapse text-center justify-content-center p-4' id='accord1'>
                                            <div className='accordion-body'>
                                                <p className='fw-bold'>
                                                <strong>There are many variations of passages</strong>  of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
  )
}

export default CreatePlaylistModal