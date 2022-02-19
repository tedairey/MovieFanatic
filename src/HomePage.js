import React, { useEffect, useState } from 'react';
import './App.scss';
import MovieCard from './MovieCard';
import { getTrendingMovies } from './Service/MovieService';

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section className='card-wrapper'>
    {movies.map(movie => 
        <MovieCard movie={movie} key={movie.id}/>
    )}
    </section>
  );
}

export default HomePage;
