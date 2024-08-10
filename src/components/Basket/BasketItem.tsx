import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  useMultiStyleConfig,
  Image,
  Text,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, CloseIcon } from "@chakra-ui/icons";
import { Product } from "../../interfaces/types";
import { useBasket } from "../../context/BasketContext";
import { ProductPrice } from "..";

interface ProductCardProps {
  product: Product;
  quantity?: number;
}

export const BasketItem: React.FC<ProductCardProps> = ({
  product,
  quantity,
}) => {
  const styles = useMultiStyleConfig("Basket");

  const navigate = useNavigate();
  const { dispatch } = useBasket();

  const removeFromBasket = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };

  const increaseQuantity = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decreaseQuantity = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Box onClick={() => handleNavigate()} sx={styles.container}>
      <Box sx={styles.imageContainer}>
        <AspectRatio ratio={2 / 3}>
          <Box sx={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.title}
              loading="lazy"
              sx={styles.image}
            />
          </Box>
        </AspectRatio>
      </Box>
      <Box sx={styles.infoWrapper}>
        <Text sx={styles.title}>{product.title}</Text>
        <Box sx={styles.innerDetailsWrapper}>
          <Flex sx={styles.flexWrapper}>
            <MinusIcon
              onClick={(e) =>
                decreaseQuantity && decreaseQuantity(e, product.id)
              }
            />
            <Text>{quantity}</Text>
            <AddIcon
              onClick={(e) =>
                increaseQuantity && increaseQuantity(e, product.id)
              }
            />
          </Flex>
          <ProductPrice product={product} />
        </Box>
      </Box>
      <CloseIcon
        sx={styles.closeIcon}
        onClick={(e) => removeFromBasket && removeFromBasket(e, product.id)}
      />
    </Box>
  );
};
