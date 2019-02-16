import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = props => {
  const poster =
    props.meta.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.meta.Poster;
  return (
    <div className="movie">
      <h2>{props.meta.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${props.meta.Title}`}
          src={poster}
        />
      </div>
      <p>({props.meta.Year})</p>
    </div>
  );
};

export default Movie;
