import { Box } from "@chakra-ui/react";

function ImageCardContainer({ children }) {
  return (
    <Box
      borderRadius={"10px"}
      w={[300, 400, 500]}
      h={["280px", "350px", "450px"]}
    >
      {children}
    </Box>
  );
}

export default ImageCardContainer;
