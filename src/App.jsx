import Main from './components/Main';
import MainInput from "./components/MainInput/MainInput";

import MovieEntity from "./components/MovieEntity/MovieEntity";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Main />
      <MainInput />
      <MovieEntity movieID="340" />
    </div>
  );
}

export default App;
