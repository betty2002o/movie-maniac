import React, { useEffect, useState } from "react";
import _ from "lodash";
import MovieCard from "./MovieCard";
import FilteredGroup from "./FilteredGroup";
import "./MovieList.css";
import "../NavBar/NavBar.css";
import Fire from "../../assets/fire.png";

const MovieList = () => {
  const [movieLists, setMovieLists] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieRating, setMovieRating] = useState(0);
  const [movieSort, setMovieSort] = useState({ by: "default", order: "asc" });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movieSort.by !== "default") {
      const sortedMovie = _.orderBy(
        filteredMovies,
        [movieSort.by],
        [movieSort.order]
      );
      setFilteredMovies(sortedMovie);
    }
  }, [movieSort]);

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
      setFilteredMovies(data.results);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleRatingFilter = (rating) => {
    if (movieRating == rating) {
      setFilteredMovies(movieLists);
      setMovieRating(0);
    } else {
      const filteredMovie = movieLists.filter(
        (x) => x.vote_average.toFixed(1) >= rating
      );
      setFilteredMovies(filteredMovie);
      setMovieRating(rating);
    }
  };
  const handleSort = (e) => {
    const { name, value } = e.target;
    setMovieSort((prev) => ({ ...prev, [name]: value }));
  };
  console.log("movieSort", movieSort);

  return (
    <section className="movie_list">
      <header className="movie_filters_header align_center">
        <h2 className="align_center movie_list_heading">
          {" "}
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="movie_filters_fs align_center">
          <FilteredGroup
            ratings={[8, 7, 6]}
            movieRating={movieRating}
            handleRatingFilter={handleRatingFilter}
          />

          <select
            name="by"
            className="movie_sorting"
            value={movieSort.by}
            onChange={handleSort}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            value={movieSort.order}
            className="movie_sorting"
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
