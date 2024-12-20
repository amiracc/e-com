// @ts-nocheck

import React from "react";
import { useParams } from "react-router-dom";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { useProduct } from "../hooks/useProduct";
import { ProductDetailsPageTemplate, StageArea, InfoArea } from "../components";

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data: product, isLoading, error } = useProduct(productId);

  // Handling loading and errors for getting one product
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
    <ProductDetailsPageTemplate
      areas={{
        stage: <StageArea product={product} />,
        info: <InfoArea product={product} />,
      }}
    />
  );
};
