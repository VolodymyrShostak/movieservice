import React, { useState } from "react";
import { useLogInUserMutation } from "../../redux/user/userApiSlice";
import { logIn } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

import { Grid, Heading, Stack, } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/form-control";
import {  useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInUser] = useLogInUserMutation();
  const dispatch = useDispatch();
const navigate = useNavigate();
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = await logInUser({ email, password });

    dispatch(logIn(user));
    clearForm();
    navigate("/profile");
  };

  return (
    <FormControl>
      <Grid h="80vh">
        <Stack
          p="10"
          boxShadow="xl"
          borderRadius="md"
          w={500}
          h={330}
          m={"auto"}
        >
          <Heading
            color="teal"
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
            mb={5}
          >
            Log In
          </Heading>
          <Input
            name="email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
            placeholder="Enter Email..."
          />
          <Input
            name="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password..."
            mb={3}
          />

          <Button type="submit" onClick={onSubmit} colorScheme="blue">
            SUBMIT
          </Button>
        </Stack>
      </Grid>
    </FormControl>
  );
};

export default SignIn;
