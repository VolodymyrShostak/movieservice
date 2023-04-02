import React, { useState } from "react";
import { useLogInUserMutation } from "../../redux/user/userApiSlice";
import { logIn } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

import { Formik, Form } from "formik";
import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { InputControl, SubmitButton } from "formik-chakra-ui";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInUser] = useLogInUserMutation();
  const dispatch = useDispatch();

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = await logInUser({ email, password });

    dispatch(logIn(user));
    clearForm();
  };

  return (
    <Formik>
      <Form>
        <Grid h="100vh" placeItems="center">
          <Stack p="10" boxShadow="xl" borderRadius="md">
            <Heading
              color="teal"
              textAlign="center"
              fontSize="lg"
              fontWeight="bold"
              mb={5}
            >
              LOG IN
            </Heading>
            <InputControl
              name="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              inputProps={{
                type: "email",
                placeholder: "Enter Email...",
              }}
            />
            <InputControl
              name="password"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              inputProps={{
                type: "email",
                placeholder: "Enter Email...",
              }}
              mb={3}
            />

            <SubmitButton type="submit" onClick={onSubmit}  >
              SUBMIT
            </SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default SignIn;
