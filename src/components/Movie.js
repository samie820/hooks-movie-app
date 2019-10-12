import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="m-movie">
      <h4 className="m-movie__title">{movie.Title}</h4>

      <img
        className="m-movie__posterImage"
        alt={`The movie titled: ${movie.Title}`}
        src={poster}
      />

      <p className="m-movie__paragraph">({movie.Year})</p>
    </div>
  );
};

export default Movie;
