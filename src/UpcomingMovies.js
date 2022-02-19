import React, { useEffect, useState } from 'react';
import './App.scss';
import MovieCard from './MovieCard';
import { getLatestMovies } from './Service/MovieService';

const UpcomingMovies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getLatestMovies()
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

export default UpcomingMovies;
