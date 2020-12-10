import React, { useState } from 'react';
import { movies } from './movies';
import MoviePreview from './MoviePreview';
import MovieDetails from './MovieDetails';
import './App.css';

function App() {

  const [currentMovie, setCurrentMovie] = React.useState(null);

  return (

    <div>
      <h1>Movies</h1>
      <h3>Click a movie for more details</h3>

      <div className="container">

      {
        movies.map((movie) => {

          return (

              <MoviePreview
                key={movie.title}
                movie={movie}
                onClickFunction={setCurrentMovie}
              />
          )
        })
      }

      </div>

      {
        currentMovie ?

          <MovieDetails currentMovie={currentMovie} />
          :
          <p>No movie selected</p>
      }

    </div>
  )
}

export default App;
