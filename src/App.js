import {useState,useEffect} from 'react'
import SIdeBar from './components/SIdeBar';

function App() {

   const [tasks, setTask] = useState([])
  const [auth, setAuth] = useState(false)
  
  const authUser = () => {
   fetch('http://localhost:8000/spotify/is-authenticated')
      .then((Response) => Response.json())
      .then((data) => {
        setAuth(data.status)
        console.log(data.status)
        if (data.status===false){
          fetch('http://localhost:8000/spotify/get-auth-url')
            .then((response) =>  response.json() )
            .then((data) => {
            window.location.replace(data.url)
              // console.log(data)
          })
        }
      })
  }
  
  const FetchTodo = () => {

    fetch('http://localhost:8000/api/todolist/')
      .then((res) => res.json())
    .then((data)=>{setTask(data)})
  }
  
  useEffect(() => {
    authUser()
    FetchTodo()
  }, []);


  return (

    

    <div className="">
      
      {auth &&
       <SIdeBar/>
      }
    </div>
  );
}

export default App;
