import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  // Utilizando chave de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //alimentando com dados para nao ficar nulo
  useEffect(() => {
    SearchMovies("Spider man");
  }, []);

  const SearchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && SearchMovies(search);
  };

  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="logo" />
      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Procurar filmes"
        />
        <img
          onClick={() => SearchMovies(search)}
          src={"https://placehold.co/20x20"}
          alt=""
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">Nenhum filme encontrado</h2>
      )}

      <Footer devName={"Brun0"} devLinks={"https://github.com/Brun0Hm"} />
    </div>
  );
};

export default App;
