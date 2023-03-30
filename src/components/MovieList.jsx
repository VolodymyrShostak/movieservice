import React from "react";
import MovieItem from "./MovieItem";
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Flex flexWrap={"wrap"} gap={4} p={4}>
      {movies &&
        movies.map((movie) => {
          return (
            <MovieItem
              to={`/movies/${movie.id}`}
              key={movie.id}
              movie={movie}
              state={{ from: location }}
            />
          );
        })}
    </Flex>
  );
};

export default MovieList;
