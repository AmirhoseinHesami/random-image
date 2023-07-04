import {
  Box,
  Button,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Card,
  CardBody,
  CardFooter,
  Image,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg="tomato" w="100%" h="100vh" p={4} color="white">
        <Flex justifyContent={"space-between"} bgColor={"white"}>
          <Button>Reload</Button>
          <Menu bgColor="balck">
            <MenuButton as={Button}>Actions</MenuButton>
            <MenuList color={"black"}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Button>Theme Mode</Button>
        </Flex>
        <Center>
          <AbsoluteCenter>
            <Card>
              <CardBody>
                <Image></Image>
              </CardBody>
              <CardFooter>
                <Button>Watermark</Button>
                <Button>Grayscale</Button>
              </CardFooter>
            </Card>
          </AbsoluteCenter>
        </Center>
      </Box>
    </>
  );
}

export default App;
