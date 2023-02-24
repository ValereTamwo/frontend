import {useState,useEffect} from 'react'
import { Provider, useSelector } from 'react-redux';
import SIdeBar from './components/SIdeBar';
import Home from './pages/Home';
import { store } from './redux/redux';
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

      <Provider store={store}>
            <Home/>
      </Provider>
      
          
  
  );
}

export default App;
