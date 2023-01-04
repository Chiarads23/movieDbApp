import { GET } from "../../utils/api";
import { useState, useEffect } from "react";

import styles from "../../styles/MovieEntity.module.scss";

const MovieEntity = ({movieID}) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    GET("movie", movieID).then((data) => setMovieData(data));
  }, []);

  const { poster_path, original_title, genres, vote_average, tagline , title} =
    movieData;

  return (
    <div className={styles.MovieEntity}>
      <div className={styles.MovieEntity__info}>
        <div className={styles.MovieEntity__infoTitle}>
            <h1>{title}</h1>
        </div>
        <div className={styles.MovieEntity__infoBottom}>
          <h4>Rating</h4>
          <p>{vote_average || 'not found'}</p>
          <h4>Genre</h4>
          <ul>
            {genres?.map((genre, id) => {
              return <li key={id}>{genre.name}</li>;
            })}
          </ul>
          <p className= {styles.MovieEntity__infoTagline}>{tagline}</p>
        </div>
      </div>
      <img
        className={styles.MovieEntity__poster}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div className= {styles.MovieEntity__book}>
        <button className={styles.bookingBtn}> BOOK IT!</button>
      </div>
    </div>
  );
};

export default MovieEntity;
