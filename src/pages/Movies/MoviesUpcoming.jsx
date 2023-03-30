import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList";
import { useGetUpcomingMoviesQuery } from "../../redux/slice/movieSlice";

const MoviesUpComing = () => {
  const { data } = useGetUpcomingMoviesQuery();
  const location = useLocation();
  console.log(location);

  return (
    <>
      {data && <MovieList movies={data?.results} state={{ from: location }} />}
    </>
  );
};

export default MoviesUpComing;
