import React from "react";
import MovieList from "../../components/MovieList";
import { useGetTopRatedMoviesQuery } from "../../redux/slice/movieSlice";

const MoviesTopRates = () => {
  const { data } = useGetTopRatedMoviesQuery();

  return <>{data && <MovieList movies={data?.results} />}</>;
};

export default MoviesTopRates;
