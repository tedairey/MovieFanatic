import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getActor, getMovieCredits } from '../Service/ActorService';
import Card from '../Card';
import moment from 'moment';
import './ActorPage.sass'

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
            <div className="movie-description-card">
                <div className="poster-wrapper">
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} 
                        alt={`${person.original_name} poster`}
                    />
                </div>
                <div className='right-column'>
                    <div className='description-wrapper'>
                        <h3 className='movie-header'>{person.original_title || person.name}</h3>
                        <p className='movie-description'>{person.biography || "No Bio Available"}</p>
                        <ul className='no-style-list'>
                            <li key={'born'} className='rating-item'>
                                Born: {moment(person.birthday).format('MMM Do, YYYY')}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='movie-header'>Known For</h3>
                        <div className='cast-list-wrapper'>
                            <ul className='no-style-list cast-list'>
                                {actingCredits.map(movie => {
                                    return <li key={movie.id}>
                                        <Card
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