import React from "react";
import { Card, Heading, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <Card
        flexDirection={"column"}
        w={60}
        p={2}
        borderRadius={"10px"}
        boxShadow={"2xl"}
        _hover={{ boxShadow: "dark-lg" }}
      >
        <Box h={10} mb={2} textAlign={"center"}>
          <Heading as="h1" fontSize="xl" noOfLines={2}>
            {movie.original_title}
          </Heading>
        </Box>
        <Box h={12} textAlign={"center"}>
          <h2>{movie.title}</h2>
        </Box>

        <Image
          // src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : "https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"
          }
          alt={movie.title}
          borderRadius={"10px"}
          // position={"absolute"}
          h={"420px"}
        />
      </Card>
    </Link>
  );
};

export default MovieItem;
