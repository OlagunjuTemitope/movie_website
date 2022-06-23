import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

const Header = ({theme, toggleTheme, fetchMovie}) => {
  const [searchKey, setSearchkey] = useState('');
 
  // searching movies
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovie(searchKey);
  };
  return (
    <>
      {/* header section */}
      <Header className={`wrapper ${theme}`}>
        <Link to="/">nFlix App</Link>
        <Nav />
        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Enter Movie Name"
            onChange={(e) => setSearchkey(e.target.value)}
          />
          <button onClick={toggleTheme} className="btn">
            {theme === 'dark' ? 'light' : 'dark'}
          </button>{' '}
        
        </form>
      </Header>
      {/* hero section */}
    </>
  );
};

export default Header;
