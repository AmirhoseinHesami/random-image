import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useAppContext } from "./AppContext";

const categories = [
  "nature",
  "city",
  "technology",
  "food",
  "abstract",
  "wildlife",
].sort();

const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

function CategorySelector() {
  const { setSelectedCategory, selectedCategory } = useAppContext();

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<BsChevronDown />}>
        {!selectedCategory
          ? "Category"
          : capitalizeFirstLetter(selectedCategory)}
      </MenuButton>
      <MenuList>
        {categories.map((cat) => (
          <MenuItem key={cat} onClick={() => setSelectedCategory(cat)}>
            {capitalizeFirstLetter(cat)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default CategorySelector;
