import { Routes, Route } from "react-router";

import Home from "Components/Home";
import Skills from "Components/Skills";
import PortFolio from "Components/Portfolio";

import 'styles/css/main.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<PortFolio />} />
      </Routes>
    </div>
  );
}

export default App;
