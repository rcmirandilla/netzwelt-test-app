import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

async function login(data) {
  const res = await fetch("/api/accounts/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Login() {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleChangeUsername(event) {
    setError(null);
    setCredentials({
      ...credentials,
      username: event.target.value,
    });
  }

  function handleChangePassword(event) {
    setError(null);
    setCredentials({
      ...credentials,
      password: event.target.value,
    });
  }

  async function handleLogin(data) {
    setIsSubmitting(true);
    setError(null);
    const response = await login(data);
    if (response.status === 404) {
      setError(response.message);
    }
    setIsSubmitting(false);
  }

  return (
    <Card variant="outline" p={4} w="640px">
      <CardHeader>
        <Heading size="lg">Login</Heading>
        <Text fontSize="sm">Please enter your credentials to continue</Text>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} alignItems="flex-start">
          <FormControl isRequired isInvalid={error}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={credentials.username}
              onChange={handleChangeUsername}
            />
          </FormControl>
          <FormControl isRequired isInvalid={error}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                value={credentials.password}
                onChange={handleChangePassword}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{error && error}</FormErrorMessage>
          </FormControl>

          <Box mt={4} width="100%">
            <Button
              isLoading={isSubmitting}
              w="100%"
              onClick={() => handleLogin(credentials)}
            >
              Log In
            </Button>
          </Box>
        </VStack>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
