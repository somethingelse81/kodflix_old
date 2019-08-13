import React from 'react';
import avengersendgame from "./avengersendgame.jpeg";
import { Link } from 'react-router-dom';


export default function HeaderCover () {
    return (
      <Link to='/details'>
        <img
          src={avengersendgame}
          className="avengersendgamecover"
          alt="avengers end game movie cover"
        />
      </Link>
    )
  }