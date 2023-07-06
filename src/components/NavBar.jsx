import { Button, Flex } from "@chakra-ui/react";
import { IoReloadOutline } from "react-icons/io5";

import ColorModeSwitch from "./ColorModeSwitch";
import CategorySelector from "./CategorySelector";

import { useAppContext } from "./AppContext";

function NavBar() {
  const { reload, setReload } = useAppContext();

  return (
    <Flex justifyContent="center" flexWrap="wrap" columnGap={5} rowGap={5}>
      <Button leftIcon={<IoReloadOutline />} onClick={() => setReload(!reload)}>
        Reload
      </Button>
      <CategorySelector />
      <ColorModeSwitch />
    </Flex>
  );
}

export default NavBar;
