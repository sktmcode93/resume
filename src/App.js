import { Routes, Route } from "react-router";

import Home from "Components/Home";
import Skills from "Components/Skills";
import PortFolio from "Components/Portfolio";
import Dday from "Components/dday/Dday";
import NotFound from 'Components/NotFound';

import 'styles/css/main.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/d-day-counter" element={<Dday />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
