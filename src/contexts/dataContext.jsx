import React from 'react'
import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react';
export const ContextData = createContext()

function DataProvider(props) {
    const [popular, setPopular] = useState([]);
    const [musics, setMusic] = useState([]);
    const [images, setImages] = useState([]);

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
    
    const fetchImages = async () => {
      const apiKey = "emiNERkoveUChvp9jEmCKVs68PDTfHhF50IY9m4ZmWOKWhuDCHU9r2vI";
      const url = 'https://api.pexels.com/v1/search?query=music&per_page=130';

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: apiKey,
          },
        });

          setImages(response.data.photos);
          console.log(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    
    return (
        <ContextData.Provider value={{popular,fetchData,fetchData_all,musics,fetchMusic,fetchImages,images}}>
            {props.children}
        </ContextData.Provider>   
  )
}

export default DataProvider