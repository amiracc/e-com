import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  Image,
  Text,
  AspectRatio,
  Flex,
  useToast,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Product } from "../../interfaces/types";
import { useBasket } from "../../context/BasketContext";
import { ProductPrice } from "..";

interface ProductCardProps {
  product: Product;
  basket?: boolean;
  quantity?: number;
}

export const ProductListCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { dispatch } = useBasket();
  const [addedToCart, setAddedToCart] = useState(false);
  const toast = useToast();

  const addToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_BASKET", product });

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const styles = useMultiStyleConfig("ProductCard", { addedToCart });

  return (
    <Box onClick={() => handleNavigate()} cursor="pointer">
      <Box sx={styles.wrapper}>
        <AspectRatio ratio={2 / 3}>
          <Box sx={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.title}
              loading="lazy"
              sx={styles.image}
            />
          </Box>
        </AspectRatio>
        <Flex sx={styles.flexButtonContainer}>
          <IconButton
            aria-label="Add to basket"
            icon={addedToCart ? <CheckIcon /> : <AddIcon />}
            onClick={addToBasket}
            sx={styles.button}
          />
        </Flex>
      </Box>
      <Box sx={styles.infoWrapper}>
        <Text sx={styles.title}>{product.title}</Text>
        <ProductPrice product={product} />
      </Box>
    </Box>
  );
};
