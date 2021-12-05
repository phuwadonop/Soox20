import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;