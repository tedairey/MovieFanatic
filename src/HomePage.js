import React, { useEffect, useState } from 'react';
import './App.scss';
import Card from './Card';
import { getTrendingMovies } from './Service/MovieService';

function HomePage() {

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
        <Card movie={movie} key={movie.id}/>
    )}
    </section>
  );
}

export default HomePage;
