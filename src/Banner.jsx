import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { imageUrl, latestMovies } from './Url';
import { samplecontext } from './App';
import './Banner.css'
const Banner = () => {
   const {setShow} =useContext(samplecontext);
   const [movie, setmovie] = useState([]);
   const [randomIndex, setrandomindex] = useState('');

   useEffect(() => {
   axios.get(latestMovies).then((response)=>{setmovie(response.data.results);
   setrandomindex( Math.floor(Math.random() * response.data.results.length))
   setShow(true)
   })
    },[randomIndex,setShow])

  return ( 
    
    <div className='banner' style={{ backgroundImage: `url(${
      imageUrl +movie[randomIndex]?.backdrop_path})`}}>
        <h1 >{movie[randomIndex]?.title}</h1>
        <p>{movie[randomIndex]?.overview}</p>
    </div>
  )
}
export default Banner