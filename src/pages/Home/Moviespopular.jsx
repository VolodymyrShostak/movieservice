import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList";
import { useGetMoviesQuery } from "../../redux/movie/movieApiSlice";

const Moviespopular = () => {
  const { data } = useGetMoviesQuery();
  const location = useLocation();

  return (
    <>
      {data && <MovieList movies={data?.results} state={{ from: location }} />}
    </>
  );
};

export default Moviespopular;
