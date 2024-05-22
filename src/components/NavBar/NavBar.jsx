import React from "react";
import DarkMode from "../DarkMode/DarkMode";

import "./NavBar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar align_center">
      <h1>Movie Maniac</h1>

      <div className="navbar_links align_center">
        <DarkMode />

        <NavLink to="/">
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
          Popular
        </NavLink>
        <NavLink to="/top_rated">
          <img src={Star} className="navbar_emoji"></img> Top Rated
        </NavLink>
        <NavLink to="/upcoming">
          <img src={Party} className="navbar_emoji"></img>Upcoming
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
