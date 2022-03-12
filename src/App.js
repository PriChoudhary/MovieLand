import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
// b0e3c62
// b6003d8a
import './App.css'
import SearchIcon from './search.svg';
const ApiKey ='http://www.omdbapi.com/?apikey=57ff1720';
const movie1 ={
    "Title": "Italian Spiderman",
    "Type": "movie",
   "Year": "2007",
    "imdbID": "tt2705436",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
const App =() =>{
    const [movies, SetMovies]= useState([]);
    const searchMovies = async (title) =>{
        const response= await fetch(`${ApiKey}&s=${title}`)
        const data = await response.json();

        SetMovies(data.Search);
        console.log(data.Search);
    }
    const [SearchText, SetSearchText]= useState('');

    useEffect( ()=>{
        searchMovies('spiderman');
    }, []
);
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search' >
            <input type="text"
            placeholder='Search for movies'
            value={SearchText}
            onChange={(e)=>SetSearchText(e.target.value)}/>
            <img src={SearchIcon} alt="Search" 
            onClick={()=>searchMovies(SearchText)}/>
            </div>
            {
                movies.length>0 ?(
                    <div className="container">
                    {movies.map((movie) =>(
                        
                        <MovieCard movie={movie}/>
                    ))}
                    </div>
                ):(
                    <div className="empty"><h2>No movies Found</h2></div>
                )
            }
        </div>
    );
}

export default App;