import { Box, Flex, Button, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        bg="mainColor"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          gap={6}
        >
          <Tabs size="md" variant="enclosed">
            <TabList>
              <Tab>
                <NavLink to={"/"}>Popular</NavLink>
              </Tab>
              <Tab>
                <NavLink to={"/topratedmovies"}>Top rated</NavLink>
              </Tab>
              <Tab>
                <NavLink to={"/upcomingmovies"}>Upcoming</NavLink>
              </Tab>
              <Tab>
                <NavLink to={"/nowplayingmovies"}>Now playing</NavLink>
              </Tab>
              <Tab>
                <NavLink to={"/latestmovies"}>Latest</NavLink>
              </Tab>
            </TabList>
          </Tabs>
          {/* <NavLink to={"/"}>Popular</NavLink>

          <NavLink to={"/topratedmovies"}>Top rated</NavLink>

          <NavLink to={"/upcomingmovies"}>Upcoming</NavLink>

          <NavLink to={"/nowplayingmovies"}>Now playing</NavLink>

          <NavLink to={"/latestmovies"}>Latest</NavLink> */}
        </Flex>
        
<SearchForm />
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
