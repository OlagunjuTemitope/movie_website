import React from 'react'
import { Link } from 'react-router-dom'
 
const Nav = ({theme}) => {
  return (
    <nav className="wrapper">
      
      <Link className={`nav-link ${theme}`} to="/">
        Home
      </Link>

      <Link className="nav-link" to="movies">
        Movies
      </Link>
      <Link className="nav-link" to="tv">
        TV
      </Link>
      <button>Light and dark</button>

    </nav>
  );
}

export default Nav