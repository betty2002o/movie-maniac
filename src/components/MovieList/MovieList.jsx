import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = () => {
  return (
    <div>
      <div className="movie_list">
        <div>category</div>
        <div className="movie_filters">
          <a href="">8+ Stars</a>
          <a href="">7+ Stars</a>
          <a href="">6+ Stars</a>
          <select class="filter_options" className="filter_options">
            <option value="date">Date</option>
            <option value="javascript">JavaScript</option>
          </select>
          <select class="filter_orders" className="filter_orders">
            <option value="date">Ascending</option>
            <option value="javascript">Discending</option>
          </select>
        </div>
      </div>
      <MovieCard />
    </div>
  );
};

export default MovieList;
