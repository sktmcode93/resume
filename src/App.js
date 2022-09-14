import { Routes, Route } from "react-router";

import Home from "pages/Home";
import Skills from "pages/Skills";
import Portfolio from "pages/Portfolio";
import Dday from "pages/Dday";
import TodoList from "pages/TodoList";
import MovieBank from "pages/MovieBank";
import NotFound from 'pages/NotFound';

import 'styles/css/main.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/resume" element={<Home />} />
        <Route path="/resume/skills" element={<Skills />} />
        <Route path="/resume/portfolio" element={<Portfolio />} />
        <Route path="/resume/d-day-counter" element={<Dday />} />
        <Route path="/resume/todo-list" element={<TodoList />} />
        <Route path="/resume/movie-bank" element={<MovieBank />} />
        <Route path="/resume/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
