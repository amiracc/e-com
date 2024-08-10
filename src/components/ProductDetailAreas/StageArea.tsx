import { Box, useMultiStyleConfig, Image } from "@chakra-ui/react";
import { Product } from "../../interfaces/types";

export interface StageAreaProps {
  product: Product;
}

export const StageArea = ({ product }: StageAreaProps) => {
  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box sx={styles.imageContainer}>
      <Image src={product.image} sx={styles.image} />
    </Box>
  );
};
