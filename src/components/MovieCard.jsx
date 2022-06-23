import React from 'react'
 
const MovieCard = ({movie, selectedMovie}) => {

    const image_path = 'https://image.tmdb.org/t/p/w500';
 const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';
 
  return (
    <div className="movie-card" onClick={() => selectedMovie(movie)}>
      <img
        src={
          movie.poster_path ? `${image_path}${movie.poster_path} ` : unavailable
        }
        alt={movie.poster_path}
        className="movie-cover"
      />

      <h3 className="movie-title">{movie.title ? movie.title : movie.name}</h3>
      <span className="rating">{movie.vote_average.toFixed(1)}</span>
    </div>
  );
}

export default MovieCard