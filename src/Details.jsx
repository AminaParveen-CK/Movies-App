import React, { useContext, useEffect, useState } from 'react'
import { samplecontext } from './App';
import { imageUrl } from './Url';
import './Detail.css'
import { BiSolidCameraMovie } from "react-icons/bi";

const Details = () => {
  const [movieDetails, setmovieDetails] = useState()
  const {movieslist,idofmovie ,setShow} =useContext(samplecontext);

useEffect(() => {
    const filteredMovie = movieslist?.filter((movie) => 
    movie?.id === idofmovie)[0] ;
    console.log(filteredMovie);
    setmovieDetails(filteredMovie); 
    setShow(false); 
}, [idofmovie,movieslist]);
 console.log(movieDetails);

  return (
    <>
  <div className='detailpage row' >
     <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
      <img src={imageUrl+movieDetails?.poster_path} alt="" />
     </div>
    <div className='details col-lg-6 col-md-6 col-sm-6  col-12'>
      <h1>{movieDetails?.title|| movieDetails?.name}</h1>
      <p><b>Overview: <br /></b>{movieDetails?.overview}</p>
      <h6><b>Language</b> : {movieDetails?.original_language}</h6>
      <h6><b>Release Date</b> : {movieDetails?.first_air_date ||movieDetails?.release_date}</h6>
      <h6><b>Adult </b>: {movieDetails?.adult}</h6>
      <h6><b>Popularity</b> : {movieDetails?.popularity}</h6>
      <h6><b>Rating</b> : {movieDetails?.vote_average}</h6>
      <h6><b>vote Count </b>: {movieDetails?.vote_count}</h6>  
      <button>Play Movie  <BiSolidCameraMovie /></button>
     </div>
  </div>
      </>
  )
}

export default Details