import React, { useState } from 'react';

import Movies from './components/movies';
import People from './components/people';
import Poster from './components/poster';
import Ratings from './components/ratings';

import Data from './data';    // JavaScript object not component

const App = () => {

  const [movies] = useState(Data);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  console.log(movies);
  return (
    <div className="container">
      <Movies movies={movies} />
      <People
        movie={movies[selectedMovieIndex]}
      />
      <Poster
        movie={movies[selectedMovieIndex]}
      />
      <Ratings
        movie={movies[selectedMovieIndex]}
      />
    </div>
  );
}


export default App;

/**
 * Lab Instruction:
 *
 * Configure the buttons rendered in 'Movies' to redirect the whole page to
 * the respective components.
 * Use 'react-router-dom' instead of basic conditional rendering
 *
 * NOTE:
 * > 'react-router-dom' is already added to your 'package.json' (no need to install it separately),
 *   but you have to setup the imports
 * > Don't forget to import 'BrowserRouter' into 'index.js'
 *
 */
