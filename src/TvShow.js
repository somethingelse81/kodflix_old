import React from "react";
import {Link} from 'react-router-dom';


function TvShow(props) {
    return (
        <Link to='/details' className="card">
        <img src={props.img} alt={props.movieTitle + ' TV show cover'} />
        <div className="overlay">
          <h2>{props.movieTitle}</h2>
        </div>
      </Link> 
    );
}

export default TvShow;