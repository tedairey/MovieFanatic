import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorPage from './ActorPage/ActorPage';
import Actors from './Actors';
import './App.scss';
import Header from './Header/Header';
import HomePage from './HomePage';
import MoviePage from './MoviePage/MoviePage';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/actors" element={<Actors />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/person/:id" element={<ActorPage />} />
      </Routes>
    </div>
  );
}

export default App;
