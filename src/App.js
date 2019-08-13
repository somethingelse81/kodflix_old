import React from "react";
import HeaderCover from "./HeaderCover";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from './Details'
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route exact path="/" component={HeaderCover} />
        <Route exact path="/" component={Gallery} />
        <Route exact path="/:details" component={Details} />
      </div>
    </Router>
  );
}


export default App;
