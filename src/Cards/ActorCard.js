import React from 'react'
import { Link } from 'react-router-dom';
import './Card.sass'

const ActorCard = (props) => {

    const { actor } = props;

    return (
        <div className="card">
          <Link className='actor-link' to={`/person/${actor.id}`} state={{ person: actor }}>
            <img 
              className='actor-image'
              src={actor.profile_path ? `https://image.tmdb.org/t/p/original/${actor.profile_path}` : ''} 
              alt={`${actor.name} poster`}
            />
            <label className='actor-name'>{actor.name}</label>
          </Link>
        </div>
    )
}

export default ActorCard;