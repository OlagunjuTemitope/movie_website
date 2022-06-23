import {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
// import Nav from './components/Nav';
// import Header from './components/Header';

import Error from './pages/Error';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';

// import YouTube from 'react-youtube';
function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme =()=>{
    setTheme(theme === 'dark' ? 'light': 'dark')
  }
  return (
    <div className={theme}>
      <nav className={`wrapper ${theme}`}>
        <Link className={`nav-link ${theme}`} to="/">
          Home
        </Link>

        <Link className={`nav-link ${theme}`} to="movies">
          Movies
        </Link>
        <Link className={`nav-link ${theme}`} to="tv">
          TV
        </Link>
        <button onClick={toggleTheme} className="btn">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} v />
        <Route path="/movies" element={<Movies />} />
        <Route path="tv" element={<Tv />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
