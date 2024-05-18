import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import "../NavBar/NavBar.css";
import Fire from "../../assets/fire.png";

const MovieList = () => {
  const [movieLists, setMovieLists] = useState([]);
  // const api_key = `${process.env.REACT_APP_TMDB_API_KEY}`;
  // console.log(api_key);
  useEffect(() => {
    fetchMovies();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGEyYjBhMDM1NDU3MTFhMjZjYzA1YWQ5Mzc4YTVmYiIsInN1YiI6IjY2NDgyMzUwNjQ3YTFlMDMxNmYyMzYyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A71E9XKwmm5CQdUNble24a5F3p9D3eg8rxlyXcJz-hk",
    },
  };

  const fetchMovies = async () => {
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }
      const data = await response.json();
      setMovieLists(data.results);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <section className="movie_list">
      <header className="movie_filters_header align_center">
        <h2 className="align_center movie_list_heading">
          {" "}
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="movie_filters_fs align_center">
          <ul className="movie_filter align_center">
            <li className="movie_filter_item">8+Stars</li>
            <li className="movie_filter_item">7+Stars</li>
            <li className="movie_filter_item">6+Stars</li>
          </ul>

          <select name="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {movieLists.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
