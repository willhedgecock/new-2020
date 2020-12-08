import React from 'react';
import { movies } from './movies';

const styles = {
    backgroundColor: '#F2EDEB',
    height: '250px',
    width: '250px',
    margin: '25px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

const MoviePreview = (props) => {
    const {movie, onClickFunction} = props;
  
    return (
      <button key={movie.title} style={styles} onClick={() => { onClickFunction(movie) }}>
          <p>{movie.title}</p>
          <p>{movie.rating}</p>
          <p>{movie.director}</p>
          <p>{movie.releaseYear}</p>
          <p><img src={movies.posterUrl}/></p>
      </button>
    )
  }

  export default MoviePreview;