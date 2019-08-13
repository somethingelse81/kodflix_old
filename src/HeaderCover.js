import React from 'react';
import avengersendgame from "./avengersendgame.jpeg";

export default function HeaderCover () {
    return (
      <div>
        <img
          src={avengersendgame}
          className="avengersendgamecover"
          alt="avengers end game movie cover"
        />
      </div>
    )
  }