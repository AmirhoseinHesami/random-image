import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex justifyContent={"space-between"}>
      <Button>Reload</Button>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Button>Theme Mode</Button>
    </Flex>
  );
}

export default NavBar;
