import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Flex justify={"space-between"} backgroundColor={"mainColor"} width={"100%"} padding={"10px"}>
      <Box>
        <NavLink to={"/"}>Home</NavLink>
      </Box>
      <Box>
        <NavLink to={"/About"}>About</NavLink>
      </Box>
      <Box>
        <NavLink to={"/"}>Movies</NavLink>
      </Box>
    </Flex>
  );
}
