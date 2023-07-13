import { Center, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Center minH="100vh" bg="gray.100">
        <Outlet />
      </Center>
    </div>
  );
}
