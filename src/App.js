import logo from './logo.svg';
import './App.css';
import { Weather } from './component/Weather';
import { Header } from './examples/Header';
import { Details } from '../src/component/Details/Details';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="weather-next-7-days" element={<Header />} />
      <Route path="details/:time" element={<Details />} />
    </Routes>


  )

}

export default App;
