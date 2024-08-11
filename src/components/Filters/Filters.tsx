import React from "react";
import {
  Checkbox,
  Stack,
  FormControl,
  FormLabel,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";

interface FiltersProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: any;
  handleCategoryChange: (category: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  isOpen,
  onClose,
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filters</DrawerHeader>

        <DrawerBody>
          <FormControl>
            <FormLabel>Categories</FormLabel>
            <Stack spacing="2">
              <Checkbox
                colorScheme="teal"
                isChecked={selectedCategories.has("electronics")}
                onChange={() => handleCategoryChange("electronics")}
              >
                Electronics
              </Checkbox>
              <Checkbox
                isChecked={selectedCategories.has("jewelery")}
                onChange={() => handleCategoryChange("jewelery")}
                colorScheme="teal"
              >
                Jewelery
              </Checkbox>
              <Checkbox
                isChecked={selectedCategories.has("men's clothing")}
                onChange={() => handleCategoryChange("men's clothing")}
                colorScheme="teal"
              >
                Men’s Clothing
              </Checkbox>
              <Checkbox
                isChecked={selectedCategories.has("women's clothing")}
                onChange={() => handleCategoryChange("women's clothing")}
                colorScheme="teal"
              >
                Women’s Clothing
              </Checkbox>
            </Stack>
          </FormControl>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
