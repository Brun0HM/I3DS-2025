import styles from "./MovieCard.module.css";
import MovieDescription from "../movieDescription/MovieDescription";
import { useState } from "react";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <p>{props.Year}</p>
        </div>
        <div>
          <img src={props.Poster} alt="" />
        </div>
        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
          <p>{props.Description}</p>
        </div>
      </div>
      {isModalOpen && (
        <MovieDescription apiUrl={props.apiUrl} movieID={props.imdbID} click={toggleModal}  />
      )}
    </>
  );
};

export default MovieCard;
