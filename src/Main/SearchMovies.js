import React, { useState } from "react";
import "./SearchMovie.css";
import Movie from "./Movie";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=4ca85734ccaff22262161f4a50e4ab71&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="searchMovie">
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Title:{" "}
        </label>
        <input
          type="query"
          name="name"
          placeholder="i.e. Alpha Dog"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
