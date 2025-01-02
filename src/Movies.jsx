import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { imageUrl } from './Url';
import { Link } from 'react-router-dom';
import { samplecontext } from './App';

const Movies = ({url,heading}) => {
  // console.log(url);
  const {movieslist,
    setmovieslist,
    idofmovie,
    setidofmovie,
    Show,
    setShow,
    searchValue,
    setsearchValue,
    url1,
    seturl1,
    searchItem,
    filteredmovies,
    setfilteredmovies,
    searchShow,
    setsearchShow
  } =useContext(samplecontext);

useEffect(()=>{
  axios.get(url).then((res)=>{
    setmovieslist(res.data.results);
    setfilteredmovies(res.data.results);
    setShow(true)
    setsearchShow(true)
  });
},[url]);

console.log(searchItem);

useEffect(() => {
if(searchItem.length===0){
  setfilteredmovies(movieslist);
} else if(searchItem?.length>0){
  setfilteredmovies(
    movieslist?.filter((item)=>
    item?.title?.toLowerCase().includes(searchItem.toLowerCase())||
    item?.name?.toLowerCase().includes(searchItem.toLowerCase())
    )
  );
}
}, [movieslist,searchItem])

 const get_id=(movie_id)=>{
  // console.log(movie_id);
  setidofmovie(movie_id);
 };
//  console.log(idofmovie);
  return (
    <div className='moviespage row '>
      <h1 className='moviesheading'>{heading}</h1>
      {(searchItem?.length===0 ? movieslist : filteredmovies)?.map((item)=>{
              return(
                <Card className='cards' style={{borderRadius:'2rem',backgroundColor:'black' ,width: '19rem',color:'rgb(201, 241, 249)'}} onClick={()=>get_id(item.id)}>
                <Link to={'/details'} style={{textDecoration:'none',color:' rgb(201, 241, 249)'}}>
                <Card.Img className='card-img' variant="top" src={ imageUrl+item.poster_path}  />
                <Card.Body>
                  <Card.Title >{item.title||item.name}</Card.Title>
                  <Card.Text>
                   language:  {item.original_language}
                  </Card.Text>
                  <Rating name="customized-10" defaultValue={item.vote_average} max={10} />
                 
                  <Button className='playbutton' variant="primary">Play Movie</Button>
                 
                </Card.Body>
                </Link>
              </Card> 
              )   
      })
        
      }
    </div>
  )
}

export default Movies
