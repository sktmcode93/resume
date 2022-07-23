import { Routes, Route } from "react-router";

import Home from "pages/Home";
import Skills from "pages/Skills";
import Portfolio from "pages/Portfolio";
import Dday from "pages/Dday";
import TodoList from "pages/TodoList";
import NotFound from 'pages/NotFound';

import 'styles/css/main.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/d-day-counter" element={<Dday />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
