import React from "react";
import MainInput from "../MainInput";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Searched = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=e834f03696dc827ea13d0fe918187b6f&language=en-US&page=1&include_adult=false&query=${name}`
    );
    const movies = await data.json();
    setSearchedMovie(movies.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const imgPath = " https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <MainInput />
      {searchedMovie &&
        searchedMovie.map((movie) => {
          return (
            <div key={movie}>
              <img src={imgPath + movie.info.poster_path} alt="" />
              <div>
                <div>
                  <h4>{movie.info.title}</h4>
                  <p>{movie.info.vote_average}</p>
                </div>
                <div>
                  <h2>Overview</h2>
                  {movie.info.overview}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Searched;
