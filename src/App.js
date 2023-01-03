import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './components/search.svg';
import MoviesCard from './MoviesCard';

//Omdb API key - 1532d7d6
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=1532d7d6';

const movie = {
  Title: 'Batman v Superman: Dawn of Justice (Ultimate Edition)',
  Year: '2016',
  imdbID: 'tt18689424',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg',
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies('Superman');
  }, []);

  return (
    <div className="app">
      <h1>MovieBrowser</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={keyPress}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
            console.log('Search results');
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MoviesCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
