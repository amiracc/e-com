import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  Box,
  Center,
  Input,
  Checkbox,
  Stack,
  FormControl,
  FormLabel,
  Drawer,
  DrawerBody,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { FilterIcon } from "../ui/FilterIcon";
import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components";
import { useProducts } from "../hooks/useProducts";

export const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("search") || ""
  );
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(searchParams.getAll("category"))
  );

  const { data: products, isLoading, error } = useProducts();

  useEffect(() => {
    const params: { [key: string]: string | string[] } = {};

    if (searchTerm) {
      params.search = searchTerm;
    }

    const categoriesArray = Array.from(selectedCategories);
    if (categoriesArray.length > 0) {
      params.category = categoriesArray;
    }

    setSearchParams(params);
  }, [searchTerm, selectedCategories, setSearchParams]);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const categories = searchParams.getAll("category");
    setSearchTerm(search);
    setSelectedCategories(new Set(categories));
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = new Set(prev);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return newCategories;
    });
  };

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategories.size > 0
        ? selectedCategories.has(product.category)
        : true;

    return matchesSearch && matchesCategory;
  });

  if (isLoading)
    return (
      <Center minH="calc(100vh - 80px)">
        <Spinner size="xl" />
      </Center>
    );
  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Box p={4} backgroundColor="#f0f0f0">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        gap={2}
        pb={4}
      >
        <Button
          onClick={onOpen}
          colorScheme="teal"
          variant="secondary"
          width="auto"
          leftIcon={<FilterIcon />}
        >
          Filter
        </Button>
        <Input
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          width="auto"
          border="1px solid #e1e1e1"
          _hover={{
            border: "1px solid #c7c7c7",
          }}
          _focus={{
            border: "1px solid #c7c7c7",
            boxShadow: "none",
          }}
        />
      </Box>

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
      <ProductList products={filteredProducts || []} />
    </Box>
  );
};
