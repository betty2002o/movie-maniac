import NavBar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/partying-face.png";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        {/* <MovieList type="now_playing" title="Now Playing" emoji={Fire} /> */}
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Party} />
      </main>
    </div>
  );
}

export default App;
