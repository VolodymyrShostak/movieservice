import {
  Box,
  Flex,
 
  Stack,
  Tabs,
  TabList,
  Tab,
  IconButton,
} from "@chakra-ui/react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import { useDispatch } from "react-redux";
import { RxExit } from "react-icons/rx";
import { useLogOutUserMutation } from "../redux/user/userApiSlice";
import { logOut } from "../redux/user/userSlice";
import { useSelector } from "react-redux";

export default function WithSubnavigation() {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const navigate = useNavigate();

  const onLogOut = async () => {
    await logOutUser();
    dispatch(logOut());
    navigate("/");
  };

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

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
              {isLoggedIn && (
                <Tab>
                  <NavLink to={"/upcomingmovies"}>Upcoming</NavLink>
                </Tab>
              )}
              <Tab>
                <NavLink to={"/nowplayingmovies"}>Now playing</NavLink>
              </Tab>
            </TabList>
          </Tabs>
        </Flex>

        <SearchForm />
        <Stack direction={"row"}>
          <Box style={{ color: "white", width: 70 }}>
            <Link as={NavLink} variant={"headerLink"} to={"/signin"}>
              Sign In
            </Link>
          </Box>
          <Box style={{ color: "white", width: 80 }}>
            <Link as={NavLink} variant={"headerLink"} to={"/signup"}>
              Sign Up
            </Link>
          </Box>
        </Stack>
        {isLoggedIn && (
          <IconButton
            onClick={onLogOut}
            colorScheme="white"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<RxExit />}
          />
        )}
      </Flex>
    </Box>
  );
}
