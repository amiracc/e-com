import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductListCard } from "..";
import { Product } from "../../interfaces/types";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} columnGap={4} rowGap={16}>
      {products.map((product) => (
        <ProductListCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};