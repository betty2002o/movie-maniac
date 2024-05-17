import React from "react";
import "./NavBar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const NavBar = () => {
  return (
    <div className="navBar align_center">
      <h1>Movie Maniac</h1>
      <div className="navbar_links align_center">
        {/* <div>mode</div> */}
        <a href="">
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
          Popular
        </a>
        <a href="">
          <img src={Star} className="navbar_emoji"></img> Top Rated
        </a>
        <a href="">
          <img src={Party} className="navbar_emoji"></img>Upcoming
        </a>
      </div>
    </div>
  );
};

export default NavBar;
