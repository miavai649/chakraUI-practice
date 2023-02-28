import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as={'nav'} alignItems={"center"} p={4} bg="white">
      <Heading>Dojo Tasks</Heading>

      <Spacer></Spacer>

      <HStack spacing={"18px"}>
        <Box rounded={"full"} bg={"gray.300"} p="10px">
          M
        </Box>
        <Text>mahmudul@gmail.com</Text>
        <Button colorScheme={"purple"}>Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
