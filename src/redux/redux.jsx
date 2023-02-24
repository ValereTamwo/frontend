import { configureStore, createSlice } from "@reduxjs/toolkit";


const AuthUserSlice = createSlice({
    name: 'user',
    initialState: {
        auth: true,
        userName: '',
        email: '',
        id:''
    },
    reducers: {

        authuser: (state,action)=>{
              fetch('http://localhost:8000/spotify/is-authenticated')
                .then((Response) => Response.json())
                .then((data) => {
                    state.auth = data.status;
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
                fetch('http://localhost:8000/spotify/me')
                .then((res) => res.json())
                .then((data) => {
                    state.userName = data.display_name
                    state.email = data.email
                    console.log(data);
                })
        }
    }
})


export const  { authuser} = AuthUserSlice.actions

export const store = configureStore({
    reducer: {
        authenticate : AuthUserSlice.reducer
    }
})