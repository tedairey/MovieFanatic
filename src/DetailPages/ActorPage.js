import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getActor, getMovieCredits } from '../Service/ActorService';
import MovieCard from '../Cards/MovieCard';
import moment from 'moment';
import './DetailPage.sass'

const ActorPage = (props) => {

    const location = useLocation()
    const [person, setPerson] = useState(location.state.person); 
    const [actingCredits, setActingCredits] = useState([]); 

    useEffect(() => {
        getActor(person.id)
            .then(res => {
                setPerson(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        getMovieCredits(person.id)
            .then(res => {
                setActingCredits(res.data.cast.slice(0,11))
            })
            .catch(err => {
                console.log(err)
            })
    }, [person.id])

    return (
        <main>
            <div className="description-card">
                <div className="poster-wrapper">
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} 
                        alt={`${person.original_name} poster`}
                    />
                </div>
                <div className='right-column'>
                    <div className='description-wrapper'>
                        <h3 className='movie-header'>{person.original_title || person.name}</h3>
                        <p className='movie-description'>{person.biography ? person.biography.replaceAll('&amp;', '&') : "No Bio Available"}</p>
                        <ul className='no-style-list bio-list'>
                            {person.birthday &&
                                <li key={'born'} className='rating-item'>
                                    Born: {moment(person.birthday).format('MMMM Do, YYYY')}
                                </li>
                            }
                            {person.place_of_birth &&
                                <li key={'birth-place'} className='rating-item'>
                                    From: {person.place_of_birth}
                                </li>
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='movie-header'>Known For</h3>
                        <div className='poster-list-wrapper'>
                            <ul className='no-style-list poster-list'>
                                {actingCredits.map(movie => {
                                    return <li key={movie.id}>
                                        <MovieCard
                                            movie={movie}
                                        />
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ActorPage;