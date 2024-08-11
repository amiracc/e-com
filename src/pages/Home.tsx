import React, { useEffect, useState } from "react";
import {
  Spinner,
  Box,
  Center,
  Input,
  Button,
  useDisclosure,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { FilterIcon } from "../ui/FilterIcon";
import { useSearchParams } from "react-router-dom";
import { ProductList, Filters } from "../components";
import { useProducts } from "../hooks/useProducts";

export const Home: React.FC = () => {
  const styles = useMultiStyleConfig("Home");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("search") || ""
  );

  // Using Set instead of array in a few places for handling uniquness and
  // efficiency when it comes to looking up for/removing etc. a value
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

  // Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter
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

  // Handling loading and errors of fetching products
  if (isLoading)
    return (
      <Center minH="calc(100vh - 80px)">
        <Spinner size="xl" />
      </Center>
    );

  if (error)
    return (
      <Center minH="calc(100vh - 80px)">
        <Box>Error: {error.message}</Box>
      </Center>
    );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
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
          sx={styles.input}
        />
      </Box>
      <Filters
        isOpen={isOpen}
        onClose={onClose}
        handleCategoryChange={handleCategoryChange}
        selectedCategories={selectedCategories}
      />
      <ProductList products={filteredProducts || []} />
    </Box>
  );
};
