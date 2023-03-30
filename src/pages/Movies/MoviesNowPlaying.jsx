import React from "react";
import MovieList from "../../components/MovieList";
import { useGetNowPlayingMoviesQuery } from "../../redux/slice/movieSlice";

const MoviesNowPlaying = () => {
  const { data } = useGetNowPlayingMoviesQuery();
  console.log(data);
  

  return <>{data && <MovieList movies={data?.results} />}</>;
};

export default MoviesNowPlaying;
