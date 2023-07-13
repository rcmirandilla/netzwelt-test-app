import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

export default function Root() {
  const { displayName } = useLoaderData();
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("user");
    navigate("/accounts/login");
  }

  return (
    <div>
      <Center minH="100vh" bg="gray.100">
        <VStack spacing={2}>
          <Heading>Welcome, {displayName}</Heading>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
          <Outlet />
        </VStack>
      </Center>
    </div>
  );
}
