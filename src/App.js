import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/auth/login";
import Forgot from "./screen/auth/forgotpw";
import Noti from "./screen/auth/noti";
import Regis from "./screen/auth/register/regis";
import Respo from "./screen/auth/changepw/changepw";
import Search from "./screen/components/library/search";
import Radio from "./screen/components/library/radio";
import Album from "./screen/components/library/comps/album";
import Player from "./screen/components/library/footer/player";

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
          <Route path="/search" element={<Search />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/album" element={<Album />} />
          <Route path="/player" element={<Player />} />

        </Routes>
      </Router>
    </div>
    
  );
}

export default App;