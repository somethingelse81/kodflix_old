import React from "react";
import TvShow from "./TvShow";
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
        <div className="row">
          <TvShow
            movieTitle={`Black Mirror`}
            img={blackmirror}
            alt={`Black Mirror TV show cover`}
          />
          <TvShow
            movieTitle={`breakingbad`}
            img={breakingbad}
            alt={`Breaking Bad TV show cover`}
          />
          <TvShow
            movieTitle={`deathnote`}
            img={deathnote}
            alt={`Death Note TV show Cover`}
          />
        </div>
        <div className="row">
          <TvShow
            movieTitle={`Game Of Thrones`}
            img={got}
            alt={`Game Of Thrones TV show cover`}
          />
          <TvShow
            movieTitle={`The Walking Dead`}
            img={thewalkingdead}
            alt={`The Walking Dead TV show cover`}
          />
          <TvShow
            movieTitle={`The Wire`}
            img={thewire}
            alt={`The Wire TV show cover`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
