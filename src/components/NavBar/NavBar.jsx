import React from "react";
import "./NavBar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>Movie Maniac</h1>
      <div className="navbar_links">
        {/* <div>mode</div> */}
        <a href="">
          <img src={Fire} alt="fire emoji"></img>Popular
        </a>
        <a href="">
          <img src={Star}></img> Top Rated
        </a>
        <a href="">
          <img src={Party}></img>Upcoming
        </a>
      </div>
    </div>
  );
};

export default NavBar;
