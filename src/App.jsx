import Home from "./components/Home";
import Searched from './components/Searched';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/searched/:search' element={<Searched />}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
