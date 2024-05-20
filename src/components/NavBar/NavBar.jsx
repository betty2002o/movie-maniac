import React from "react";
import DarkMode from "../DarkMode/DarkMode";

import "./NavBar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const NavBar = () => {
  return (
    <div className="navBar align_center">
      <h1>Movie Maniac</h1>
      <div className="navbar_links align_center">
        <DarkMode />
        <a href="#popular">
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
          Popular
        </a>
        <a href="#top_rated">
          <img src={Star} className="navbar_emoji"></img> Top Rated
        </a>
        <a href="#upcoming">
          <img src={Party} className="navbar_emoji"></img>Upcoming
        </a>
      </div>
    </div>
  );
};

export default NavBar;
