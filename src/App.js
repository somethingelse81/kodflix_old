import React from "react";
import blackmirror from "./blackmirror.jpg";
import avengersendgame from "./avengersendgame.jpeg";
import breakingbad from "./breakingbad.jpg";
import deathnote from "./deathnote.jpg";
import thewalkingdead from "./thewalkingdead.jpg";
import got from "./got.jpg";
import thewire from "./thewire.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src={avengersendgame}
        className="avengersendgamecover"
        alt="avengers end game movie cover"
      />
      <div className="container">
        <ul className="row">
          <li className="card">
            <img src={blackmirror} alt="Black Mirror TV show cover" />
          </li>
          <li className="card">
            <img src={breakingbad} alt="Breaking Bad show cover" />
          </li>
          <li className="card">
            <img src={deathnote} alt="Death Note show cover" />
          </li>
        </ul>
        <ul className="row">
          <li className="card">
            <img src={got} alt="Game Of Thrones show cover" />
          </li>
          <li className="card">
            <img src={thewalkingdead} alt="The Walking Dead show cover" />
          </li>
          <li className="card">
            <img src={thewire} alt="The Wire show cover" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
