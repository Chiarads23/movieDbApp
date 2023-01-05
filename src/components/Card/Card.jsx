import React from "react";
import styles from '../../styles/Card.module.scss';



const Card =(movie) => {


    const imgPath=' https://image.tmdb.org/t/p/w500';

    return (
        <div className={styles.movie}>
            <img className={styles.posterImg} src={imgPath+movie.info.poster_path} alt="" />
            <div className={styles.movieDetails}>
                <div className={styles.box}>
                    <h4>{movie.info.title}</h4>
                    <p>{movie.info.vote_average}</p>
                </div>
                <div className={styles.overview}>
                    <h2>Overview</h2>
                    {movie.info.overview}
                </div>
            </div>
        </div>
    )
}

export default Card;