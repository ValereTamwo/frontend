import {useState,useEffect} from 'react'
import { Provider, useSelector } from 'react-redux';
import SIdeBar from './components/SIdeBar';
import Bibliotheque from './pages/Bibliotheque';
import Home from './pages/Home';
import Viewplaylist from './pages/Viewplaylist';
import { store } from './redux/redux';

import { BrowserRouter,Routes,route, Route } from 'react-router-dom';
import Research from './pages/Research';

function App() {

  //  const [tasks, setTask] = useState([])
  // const [auth, setAuth] = useState(true)
  

  // const authUser = () => {
  //  fetch('http://localhost:8000/spotify/is-authenticated')
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setAuth(data.status)
  //       console.log(data.status)
  //       if (data.status===false){
  //         fetch('http://localhost:8000/spotify/get-auth-url')
  //           .then((response) =>  response.json() )
  //           .then((data) => {
  //           window.location.replace(data.url)
  //             // console.log(data)
  //         })
  //       }
  //     })
  // }
  
 
  
  // useEffect(() => {
  //   authUser()
  // }, []);


  return (

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/biblio' element={<Bibliotheque />}></Route>
          <Route exact path='/viewplaylist' element={<Viewplaylist />}></Route>
          <Route exact path='/research' element={<Research/>}></Route>

        </Routes>
      </Provider>
      </BrowserRouter>
          
  
  );
}

export default App;
