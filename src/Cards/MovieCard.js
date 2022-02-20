import React from 'react'
import { Link } from 'react-router-dom';
import popcornImage from '../Images/popcorn.png'
import './Card.sass'

const MovieCard = (props) => {

    const { movie } = props;

    return (
        <div className="card">
          <Link className="poster-wrapper" to={`/movie/${movie.id}`} state={{ movie }}>
            {movie.poster_path ?
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : popcornImage} 
                alt={`${movie.original_title} poster`}
              /> :
              <div className='no-poster-wrapper'>
                <img 
                  className='no-poster-image'
                  src={popcornImage}
                  alt={`${movie.original_title} poster`}
                />
                <label className='no-poster-title'>{movie.original_title}</label>
              </div>

            }
            <template className='movie-description'>
              <label className='movie-title'>{movie.original_title || movie.name}</label>
              <p className='movie-overview'>{movie.overview}</p>
            </template>
          </Link>
        </div>
    )
}

export default MovieCard;