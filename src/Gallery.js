import React from 'react';
import TvShow from "./TvShow";
import blackmirror from "./blackmirror.jpg";
import breakingbad from "./breakingbad.jpg";
import deathnote from "./deathnote.jpg";
import thewalkingdead from "./thewalkingdead.jpg";
import got from "./got.jpg";
import thewire from "./thewire.jpg";

export default function Gallery() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TvShow id='black-mirror' movieTitle={`Black Mirror`} img={blackmirror} />
            <TvShow id='breaking-bad'movieTitle={`Breaking Bad`} img={breakingbad} />
            <TvShow id='death-note'movieTitle={`Death Note`} img={deathnote} />
          </div>
          <div className="row">
            <TvShow id='game-of-thrones'movieTitle={`Game Of Thrones`} img={got} />
            <TvShow id='the-walking-dead'movieTitle={`The Walking Dead`} img={thewalkingdead} />
            <TvShow id='the-wire'movieTitle={`The Wire`} img={thewire} />
          </div>
        </div>
      </div>
    );
  }
