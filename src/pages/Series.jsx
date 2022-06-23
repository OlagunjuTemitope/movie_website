import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import Nav from '../components/Nav';

const image_path = 'https://image.tmdb.org/t/p/w1280';

const Series = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchkey] = useState('');
  const [selectedMovie, setSelectedMovie] = useState([]);

  const url = 'https://api.themoviedb.org/3';
 
  //fetching movies
  const fetchMovie = async () => {
    //  const data = await fetch(
    //    `${url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    //  );
    const type = searchKey ? 'search/series' : 'series/popular';
    const data = await fetch(
      `${url}/${type}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchKey}`
    );
    const response = await data.json();
    console.log(response.results);
    setMovies(response.results);
    setSelectedMovie(response.results[0]);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  // searching movies
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovie(searchKey);
  };

  return (
    <div className="App">
      {/* header section */}

      <header className="wrapper">
        <h2>nFlix App</h2>

        {/* hero section */}
        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Enter Movie Name"
            onChange={(e) => setSearchkey(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
      </header>
      {/* hero section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${image_path}${selectedMovie.backdrop_path})`,
        }}
      >
        <div className="hero-content wrapper">
          {/* <button className="trailer-btn">Play Trailer</button> */}
          <h1 className="hero-name">{selectedMovie.name}</h1>
          <p className="hero-content">{selectedMovie.overview}</p>
        </div>
      </div>
      {/* {searchKey} */}
      {movies ? (
        <div className="container wrapper">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              selectedMovie={setSelectedMovie}
            />
          ))}
        </div>
      ) : (
        'Connect to internet'
      )}
    </div>
  );
};

export default Series;
