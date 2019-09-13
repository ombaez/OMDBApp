import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => {
  return (
    <div className="movieContainer">
      {movies.length > 0
        ? movies.map(movie => (
            <Link to={`/movies/${movie.imdbID}`}>
              <div key={movie.imdbID} className="movieCard">
                <img className="imageCardSize" src={movie.Poster} />
                <div className="movieTitle">{movie.Title}</div>
                <div className="movieTitle">{movie.Year}</div>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};
