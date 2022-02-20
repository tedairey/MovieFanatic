import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass';
import Header from './Header/Header';
import HomePage from './MainPages/HomePage';
import UpcomingMovies from './MainPages/UpcomingMovies';
import Actors from './MainPages/Actors';
import MoviePage from './DetailPages/MoviePage';
import ActorPage from './DetailPages/ActorPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/actors" element={<Actors />} />
        <Route exact path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/person/:id" element={<ActorPage />} />
      </Routes>
    </div>
  );
}

export default App;
