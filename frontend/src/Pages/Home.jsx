import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'
import { useState } from 'react';
import { getPopularMovies, searchMovies }  from '../service/api';

function Home() {
    const[searchQuery,setSearchQuery]=useState("");
    const[movies,setMovies]=useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(null);
    
    useEffect(()=>{
        const loadPopularMovies =async() =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load...")
            }
             finally{
                setLoading(false)
             }
        }
        loadPopularMovies()
    },[])

    const handleSearch=(e) => {
        e.preventDefault()
        alert(searchQuery);
        setSearchQuery(" ")
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" 
                placeholder='Search movies...'  
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value)}}
                className='search-input'/>
                <button type="submit" className='search-button'>Search</button>
            </form>
             
             {error && <div className='error-message'>{error}</div>}

            {loading ? <div className='loading'>Loading...</div>:
            <div className="movie-grid">
                {movies.map((movie) =>(
                  movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            }
        </div>
    )
}

export default Home