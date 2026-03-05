import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;
  return (
    <div className="">
      <h1 className="text-3xl  text-white ">{title}</h1>
      <div className="flex  m-2 overflow-x-auto no-scrollbar">
        <div className="flex p-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
