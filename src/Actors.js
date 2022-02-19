import React, { useEffect, useState } from 'react';
import ActorCard from './ActorCard';
import './App.scss';
import { getTredingActors } from './Service/ActorService';

const Actors = () => {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    getTredingActors()
      .then(res => {
        setActors(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section className='card-wrapper'>
    {actors.map(actor => 
        <ActorCard actor={actor} key={actor.id}/>
    )}
    </section>
  );
}

export default Actors;
