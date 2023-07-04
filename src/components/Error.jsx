import { Center, AbsoluteCenter, Text } from "@chakra-ui/react";

function Error({ error }) {
  return (
    <Center>
      <AbsoluteCenter>
        <Text>{error}</Text>
      </AbsoluteCenter>
    </Center>
  );
}

export default Error;
