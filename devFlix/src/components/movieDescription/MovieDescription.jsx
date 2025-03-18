import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";
import devFlix from "../../../public/favicon.png";
const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState({});

  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img
            src={movieDesc.Poster}
            alt={`Imagem da capa do filme ${movieDesc.Title}`}
          />
          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movieDesc.Title
                )}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {movieDesc.Actors}</p>
            <p>Gênero: {movieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movieDesc.Plot}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDescription;
