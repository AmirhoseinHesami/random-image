import { Button, Flex } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { IoReloadOutline } from "react-icons/io5";
import CategorySelector from "./CategorySelector";
import { useAppContext } from "./AppContext";

function NavBar() {
  const { reload, setReload } = useAppContext();

  return (
    <Flex
      justifyContent={"space-between"}
      width={["100%", "100%", "100%", "60em"]}
    >
      <Button leftIcon={<IoReloadOutline />} onClick={() => setReload(!reload)}>
        Reload
      </Button>
      <CategorySelector />
      <ColorModeSwitch />
    </Flex>
  );
}

export default NavBar;
