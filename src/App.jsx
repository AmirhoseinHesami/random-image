import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImageCard from "./components/ImageCard";
import { AppWrapper } from "./components/AppContext";

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
