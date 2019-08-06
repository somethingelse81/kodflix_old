import React from 'react';
import avengersendgame from './avengersendgame.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={avengersendgame} className="avengersendgamecover" alt="avengers end game movie cover" />
      <div className="container">
        <ul className="row">
          <li className="card" id="1"><h1>Black Mirror</h1></li>
          <li className="card" id="2"><h1>Breaking Bad</h1></li>
          <li className="card" id="3"><h1>Death Note</h1></li>
        </ul>
        <ul className="row">
          <li className="card" id="1"><h1>Game of Thrones</h1></li>
          <li className="card" id="2"><h1>The Walking Dead</h1></li>
          <li className="card" id="3"><h1>The Wire</h1></li>
        </ul></div>

    </div>
  );
}

export default App;
