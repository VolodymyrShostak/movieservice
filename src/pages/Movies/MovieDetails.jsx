import { useGetMovieQuery } from "../../redux/slice/movieSlice";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";


const MovieDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data } = useGetMovieQuery(id);
  const goBack = () => navigate(-1);

  const { title, overview, release_date, vote_average, poster_path, genres } =
    data || {};

  return (
    <>
      <Button
        type="button"
        mt={3}
        ml={5}
        onClick={goBack}
      >{`<< Back To`}</Button>
      {data && (
        <Flex flexDirection={"column"} p={5}>
          <Flex mb={7}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              borderRadius={"10px"}
              h={96}
              w={64}
            />
            <Flex flexDirection={"column"} ml={10}>
              <Heading mb={5}>{title}</Heading>
              <Flex mb={3}>
                <Text fontWeight={700}>Genres:</Text>
                {genres ? genres.map((gen) => gen.name).join(", ") : ""}
              </Flex>
              <Flex mb={3}>
                <Text fontWeight={700}>Release Date:</Text> {release_date}
              </Flex>
              <Flex>
                <Text fontWeight={700}>Rating: </Text> {vote_average}
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Text>{overview}</Text>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default MovieDetails;
