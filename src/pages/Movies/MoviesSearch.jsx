import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList";
import { useGetSearchMoviesQuery } from "../../redux/slice/movieSlice";

const MoviesSearch = () => {
    const { state } = useLocation();
    console.log(state);

  const { data } = useGetSearchMoviesQuery(state.search);
 

  return <>{data && <MovieList movies={data?.results} />}</>;
};

export default MoviesSearch;
