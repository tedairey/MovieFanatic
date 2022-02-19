import React from 'react'
import { Link } from 'react-router-dom';
import './Card.scss'

const Card = (props) => {

    const { movie } = props;

    return (
        <div className="card">
          <Link className="poster-wrapper" to={`/movie/${movie.id}`} state={{ movie }}>
            <img 
              src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : ''} 
              alt={`${movie.original_title} poster`}
            />
            <template className='movie-description'>
              <label className='movie-title'>{movie.original_title || movie.name}</label>
              <p>{movie.overview}</p>
            </template>
          </Link>
        </div>
    )
}

export default Card;