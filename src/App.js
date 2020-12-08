import React, { useState } from 'react';
import { movies } from './movies';
import MoviePreview from './MoviePreview';
import MovieDetails from './MovieDetails';

function App() {

  const [currentMovie, setCurrentMovie] = React.useState(null);

  return (

    <div>
      <h1>Movies</h1>

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
