import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <>
      <Box w="100%" h="100vh" p={4}>
        <NavBar />
        <ImageCard />
      </Box>
    </>
  );
}

export default App;
