import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import MemesApp from "./components/memes/MemesApp";
import AdviceApp from "./components/quotes/AdviceApp";

function App() {
  return (
    <>
      <Link type="button" to="/advice" className="btn btn-primary">
        Advice
      </Link>
      <Link type="button" to="/memes" className="btn btn-secondary">
        Memes
      </Link>
      <button type="button" className="btn btn-success">
        Green
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>

      <Routes>
        <Route exact path="/advice" element={<AdviceApp />} />
        <Route exact path="/memes" element={<MemesApp />} />
      </Routes>
    </>
  );
}

export default App;
