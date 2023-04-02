import React, { useState } from "react";
import { useRegisterUserMutation } from "../../redux/user/userApiSlice";
import { register } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

import { Grid, Heading, Stack } from "@chakra-ui/layout";

import { Button, Input } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/form-control";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  const onSubmit = async (e) => {
    const user = await registerUser({ email, password });

    dispatch(register(user));
    clearForm();
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
            Registration
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

export default SignUp;
