import { configureStore, createSlice } from "@reduxjs/toolkit";


const AuthUserSlice = createSlice({
    name: 'user',
    initialState: {
        auth: false,
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




const TokenSlice = createSlice({
    name: 's_token',
    initialState: '',
    reducers: {
        getToken: (state,action) => {
            const hash = window.location.hash;
            let token = window.localStorage.getItem('s_token');
            state = token;
            if (!token && hash) {
                token = hash.substring(1).split('&').find(elem => elem.startsWith("access_token")).split('=')[1]
                window.localStorage.setItem('s_token', token)
                state = token;
                console.log(token)
        }
        } 
    }
})



export const  { authuser} = AuthUserSlice.actions
export const { getToken } = TokenSlice.actions

export const store = configureStore({
    reducer: {
        authenticate: AuthUserSlice.reducer,
        token:TokenSlice.reducer
    }
})