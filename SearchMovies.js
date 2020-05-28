import React from 'react'


export default function SearchMovies() { 
  return (
    <form className="form">
      <label className="label" htmlForm="query">Movie Name</label>
      <input className="input" type="input" placeholder="i.e. Jurassic Park" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}
