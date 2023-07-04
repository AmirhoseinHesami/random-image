import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { BsChevronDown } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";

function NavBar() {
  return (
    <Flex justifyContent={"space-between"}>
      <Button leftIcon={<IoReloadOutline />}>Reload</Button>
      <Menu>
        <MenuButton as={Button} leftIcon={<BsChevronDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <ColorModeSwitch />
    </Flex>
  );
}

export default NavBar;
