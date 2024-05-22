import { Routes, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import React from "react";
import Fire from "../../assets/fire.png";
import Star from "../../assets/star.png";
import Party from "../../assets/partying-face.png";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList type="popular" title="Popular" emoji={Fire} />}
      />
      <Route
        path="/top_rated"
        element={<MovieList type="top_rated" title="Top Rated" emoji={Star} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Upcoming" emoji={Party} />}
      />
    </Routes>
  );
};

export default Routing;
