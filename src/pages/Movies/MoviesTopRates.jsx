import React from "react";
import MovieList from "../../components/MovieList";
import { useGetTopRatedMoviesQuery } from "../../redux/movie/movieApiSlice";

const MoviesTopRates = () => {
  const { data } = useGetTopRatedMoviesQuery();

  return <>{data && <MovieList movies={data?.results} />}</>;
};

export default MoviesTopRates;
