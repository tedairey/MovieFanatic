import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;