import React from "react";

const FilteredGroup = ({ ratings, movieRating, handleRatingFilter }) => {
  return (
    <ul className="movie_filter align_center">
      {ratings.map((rating) => (
        <li
          key={rating}
          className={
            movieRating === rating
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => handleRatingFilter(rating)}
        >
          {rating}+Stars
        </li>
      ))}
    </ul>
  );
};

export default FilteredGroup;
