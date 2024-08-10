import {
  Flex,
  Text,
  useMultiStyleConfig,
  Box,
  VisuallyHidden,
} from "@chakra-ui/react";

import { Product } from "../../interfaces/types";

export interface ProductPriceProps {
  product: Product;
  leftAlignedText?: boolean;
}

export const ProductPrice = ({
  product,
  leftAlignedText,
}: ProductPriceProps) => {
  const styles = useMultiStyleConfig("CrossStyle", {
    leftAlignedText,
  });

  return (
    <Flex sx={styles.priceContainer}>
      {/* Example of common technique used in web accessibility if no aria attribute is applicable. */}
      {/* It will hide the descriptor but is readable for screen readers. */}
      <VisuallyHidden>Price</VisuallyHidden>
      <Box sx={styles.price}>
        <Flex sx={styles.priceFlexContainer}>
          <Text sx={styles.listPrice}>{`€ ${product.price}`}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
