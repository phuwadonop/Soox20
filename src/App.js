import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/login";
import Forgot from "./screen/forgotpw";
import Noti from "./screen/noti";
import Regis from "./screen/auth/register/regis";
import Respo from "./screen/changepw/changepw";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/noti" element={<Noti />} />
          <Route path="/register" element={<Regis />} />
          <Route path="/resetpassword" element={<Respo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;