import React from 'react';
import { movies } from './movies';

const MoviePreview = (props) => {
    const {movie, onClickFunction} = props;
  
    return (
      <button className="movie-preview" key={movie.title} onClick={() => { onClickFunction(movie) }}>
          <p>{movie.title}</p>
          <p>{movie.rating}</p>
          <p>{movie.director}</p>
          <p>{movie.releaseYear}</p>
          <p><img src={movie.posterUrl} alt={movie.title} /></p>
      </button>
    )
  }

  export default MoviePreview;