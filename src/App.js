import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

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

    

    <div className="App">
      
      {auth &&
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      }
    </div>
  );
}

export default App;
