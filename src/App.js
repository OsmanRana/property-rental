
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Floors from './components/Floors/Floors';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
        path="floors/:floorId"
        element={<Floors />}
      />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
