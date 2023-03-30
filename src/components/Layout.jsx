import React from "react";
import Header from "./Header";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container maxW="100%">
      <Header />
      <Outlet />
    </Container>
  );
};
