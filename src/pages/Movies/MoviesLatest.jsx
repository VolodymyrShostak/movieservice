import React from "react";
import MovieList from "../../components/MovieList";
import { useGetLatestMoviesQuery } from "../../redux/movie/movieApiSlice";

const MoviesLatest = () => {
  const { data } = useGetLatestMoviesQuery();
  console.log(data);

  return <>{data && <MovieList movies={data?.results} />}</>;
};

export default MoviesLatest;
