import React from "react";
import Star from "../../assets/glowing-star.png";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  console.log(movie);
  const roundedVoteAverage = movie.vote_average.toFixed(1);
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="movie_card"
      target="_blank"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="movie_date_rate align_center">
          <p>{movie.release_date}</p>
          <p className="align_center">
            {roundedVoteAverage}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
