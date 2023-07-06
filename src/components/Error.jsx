import {
  Center,
  AbsoluteCenter,
  Text,
  Box,
  useColorMode,
} from "@chakra-ui/react";

function Error({ error }) {
  const { colorMode } = useColorMode();

  return (
    <Center>
      <AbsoluteCenter>
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.700"}
          padding="20px"
          borderRadius="10px"
        >
          <Text>{error}</Text>
        </Box>
      </AbsoluteCenter>
    </Center>
  );
}

export default Error;
