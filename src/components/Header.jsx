import { Box, Flex, Button, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";

import { Link, NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";
import { useDispatch } from "react-redux";
import { RxExit } from "react-icons/rx";
import { useLogOutUserMutation } from "../redux/user/userApiSlice";
import { logOut } from "../redux/user/userSlice";

export default function WithSubnavigation() {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  // const token = localStorage.getItem("token");

  const onLogOut = async () => {
     await logOutUser();
    dispatch(logOut());
  };
  


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
            {/* <Link to={"/signin"}></Link> */}
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
            {/* <Link to={"/signup"}></Link> */}
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
            onClick={onLogOut}
          >
            EV
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
