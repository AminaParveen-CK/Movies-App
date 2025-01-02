import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { imageUrl, latestMovies } from './Url';
import { samplecontext } from './App';

const Banner = () => {
   const {setShow} =useContext(samplecontext);
   const [movie, setmovie] = useState([]);
   const [randomIndex, setrandomindex] = useState('');

   useEffect(() => {
   axios.get(latestMovies).then((response)=>{setmovie(response.data.results);
   setrandomindex( Math.floor(Math.random() * response.data.results.length))
   setShow(true)
   })
    },[])

  return ( 
    <div className='banner' style={{backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',  backgroundImage: `url(${
      imageUrl +movie[randomIndex]?.backdrop_path})`,width:"100%",height:'100vh'}}>
        <h1 >{movie[randomIndex]?.title}</h1>
        <p>{movie[randomIndex]?.overview}</p>
    </div>
  )
}
export default Banner