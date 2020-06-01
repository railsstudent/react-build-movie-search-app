import React, { useState } from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies() { 

  // actual state,  function that updates the state
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');

    // const query = 'Jurassic Park';
    const lang = 'en-US';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=670b645d71a02ad941d144da60b5bee9&language=${lang}&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json()
      console.log(data);
      setMovies(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlForm="query">Movie Name</label>
        <input className="input" type="input" placeholder="i.e. Jurassic Park" 
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  )
}
