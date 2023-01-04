import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Card from "../Card";
import styles from "../../styles/Main.module.scss";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=e834f03696dc827ea13d0fe918187b6f";
const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=e834f03696dc827ea13d0fe918187b6f";
const upcomingUrl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=e834f03696dc827ea13d0fe918187b6f";

const arr = ["Popular", "Top Rated", "Upcoming"];

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  let [url, setUrl] = useState(popularUrl);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url]);

  const getData = (movieType)=>{
    if(movieType === 'Popular')
    {
        url= popularUrl;
    }
    if(movieType === 'Top Rated')
    {
        url= topRatedUrl;
    }
    if(movieType === 'Upcoming')
    {
        url= upcomingUrl;
    }
    setUrl(url);
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Header}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="" />
        </div>
        <nav>
          <ul>
            {arr.map((value, id) => {
              return (
                <li key={id}>
                  <a
                  href="#"
                    key={id}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.CardBox}>
        {movieData.length === 0 ? (
          <p>Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </div>
  );
};

export default Main;
