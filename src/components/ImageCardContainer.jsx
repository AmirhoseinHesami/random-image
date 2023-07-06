import { Box } from "@chakra-ui/react";

function ImageCardContainer({ children }) {
  return (
    <Box borderRadius={"10px"} w={[300, 400, 500]}>
      {children}
    </Box>
  );
}

export default ImageCardContainer;
