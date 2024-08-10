import { Box, Button, useMultiStyleConfig, useToast } from "@chakra-ui/react";
import { Product } from "../../interfaces/types";
import { useBasket } from "../../context/BasketContext";

interface ProductCardProps {
  product: Product;
}

export const ProductDetailCTA: React.FC<ProductCardProps> = ({ product }) => {
  const styles = useMultiStyleConfig("ProductDetail");

  const toast = useToast();

  const { dispatch } = useBasket();

  const addToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "ADD_TO_BASKET",
      product,
    });

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box sx={styles.productDetailCTA}>
      <Button
        variant="solidPDP"
        onClick={addToBasket}
        data-testid="add-to-cart-button"
      >
        Add to cart
      </Button>
    </Box>
  );
};
