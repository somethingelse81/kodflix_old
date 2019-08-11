import React from "react";


function TvShow(props) {
    return (
        <div className="card">
        <img src={props.img} alt={props.alt} />
        <div className="overlay">
          <h2>{props.movieTitle}</h2>
        </div>
      </div> 
    );
}

export default TvShow;