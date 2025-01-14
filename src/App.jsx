import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './Movies';
import { comedyMovies, latestMovies, popularMovies } from './Url';
import Banner from './Banner';
import Details from './Details';
import { createContext} from 'react';
import { useState } from 'react';
const samplecontext = createContext();

function App() {
  const [Show, setShow] = useState(true);
  const [searchShow, setsearchShow] = useState(false)
  const [movieslist, setmovieslist] = useState([])
  const [idofmovie, setidofmovie] = useState();
  const [searchValue, setsearchValue] = useState()
  const [searchItem, setsearchItem] = useState('')
  const [filteredmovies, setfilteredmovies] = useState('')
  console.log(searchItem);
  console.log(searchValue);


    // const submitSearch=(e)=>{
    //   e.preventDefault()
    //   // console.log(searchItem);
    //   // console.log(movieslist);
    //   // const filter= movieslist?.filter((mov)=>mov?.title.includes(searchItem));
    //   // console.log(filter);
    //   setsearchValue(searchItem);
    //   // console.log(searchValue);
      
    //   setmovieslist((prev)=>prev?.filter((mov)=>mov?.title.includes(searchValue)));
    //   // setmovieslist((prev)=>prev?.filter((mov)=>console.log(mov)
    //   // ));
    //  } 
    //  console.log(movieslist);
  return (
    <div className="App">
      <samplecontext.Provider 
      value={{ 
        movieslist,
        setmovieslist,
        idofmovie,
        setidofmovie,
        Show,
        setShow,
        searchValue,
        setsearchValue,
        searchItem,
        setsearchItem,
        filteredmovies,
        setfilteredmovies,
        searchShow,
        setsearchShow
        }}>
      <BrowserRouter>
      {Show===true?<Header/>:''}
      <Routes>
      <Route path='/' element={<Banner/>}></Route>
        <Route path='/popular' element={<Movies url={popularMovies} heading={'Popular Movies'}/>} />
        <Route path='/comedy' element={<Movies url={comedyMovies} heading={'Comedy Movies'}/>} />
        <Route path='/latest' element={<Movies url={latestMovies} heading={'Latest Movies'}/>} />
        <Route path='/details' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      </samplecontext.Provider> 
    </div>
  );
}
export default App;
export {samplecontext}

