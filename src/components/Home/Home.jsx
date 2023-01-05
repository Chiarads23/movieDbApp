import React from "react";
import Main from "../Main";
import MainInput from "../MainInput";
import MovieEntity from "../MovieEntity";

const Home = () => {
  return (
    <div >
      <Main />
      <MainInput />
      <MovieEntity movieID="340" />
    </div>
  );
};

export default Home;
