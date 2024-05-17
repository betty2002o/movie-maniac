import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import "../NavBar/NavBar.css";
import Fire from "../../assets/fire.png";

const MovieList = () => {
  return (
    <section className="movie_list">
      <header className="movie_filters_header align_center">
        <h2 className="align_center movie_list_heading">
          {" "}
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="movie_filters_fs align_center">
          <ul className="movie_filter align_center">
            <li className="movie_filter_item">8+ Stars</li>
            <li className="movie_filter_item">7+ Stars</li>
            <li className="movie_filter_item">6+ Stars</li>
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
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieList;
