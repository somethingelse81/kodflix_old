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
          />
          <TvShow
            movieTitle={`Breaking Bad`}
            img={breakingbad}
            
          />
          <TvShow
            movieTitle={`Death Note`}
            img={deathnote}
          />
        </div>
        <div className="row">
          <TvShow
            movieTitle={`Game Of Thrones`}
            img={got}
          />
          <TvShow
            movieTitle={`The Walking Dead`}
            img={thewalkingdead}
          />
          <TvShow
            movieTitle={`The Wire`}
            img={thewire}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
