import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/partying-face.png";
import Routing from "./components/Routing/Routing";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;
