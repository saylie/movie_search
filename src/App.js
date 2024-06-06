import './App.css';
import React, { useState } from 'react';
import Movielist from './Components/Movielist';
import Searchbar from './Components/Searchbar';
import { fetchMovies } from './API/Movieapi';


function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async(searchValue) =>{
    const searchResults = await fetchMovies(searchValue);
    setMovies(searchResults)
  }

  return (
    <div>
      <h1>Movie Search App</h1>
      <Searchbar onSearch={handleSearch} />
      <Movielist movies={movies} />
    </div>
  );
}

export default App;