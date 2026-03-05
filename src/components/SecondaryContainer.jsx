import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 relative z-20 pl-12">
        <MovieList title={"NowPlaying"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
