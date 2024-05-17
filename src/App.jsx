import NavBar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";
import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
