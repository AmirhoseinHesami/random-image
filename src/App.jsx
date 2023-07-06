import { Box } from "@chakra-ui/react";

import { AppWrapper } from "./components/AppContext";
import NavBar from "./components/NavBar";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <AppWrapper>
      <Box w={"100%"} h="100vh" p={4}>
        <NavBar />
        <ImageCard />
      </Box>
    </AppWrapper>
  );
}

export default App;
