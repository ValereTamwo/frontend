import React from 'react'
import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react';
export const ContextData = createContext()

function DataProvider(props) {
    const [popular, setPopular] = useState([]);
    const [musics, setMusic] = useState([]);
    const fetchData = async () => {
            await axios.get("http://localhost/Kmeans/connect.php")
                .then((res) => setPopular(res.data))
    }
    const fetchData_all = async () => {
            await axios.get("http://localhost/Kmeans/allSong.php")
                .then((res) => setPopular(res.data))
    }

    const fetchMusic = async(id) => {
            await axios.get(`http://localhost/Kmeans/musiclist.php?id="${id}"`)
                .then((res) => setMusic(res.data))
        }
    
    return (
        <ContextData.Provider value={{popular,fetchData,fetchData_all,musics,fetchMusic}}>
            {props.children}
        </ContextData.Provider>   
  )
}

export default DataProvider