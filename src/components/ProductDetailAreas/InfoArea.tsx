import { useRef } from "react";

import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import { Product } from "../../interfaces/types";

import { ProductDetailCTA, ProductDetailName } from "..";

export interface InfoAreaProps {
  product: Product;
}

export const InfoArea = ({ product }: InfoAreaProps) => {
  const infoAreaRef = useRef<HTMLDivElement>(null);

  const styles = useMultiStyleConfig("ProductDetail");

  return (
    <Box sx={styles.infoArea} ref={infoAreaRef}>
      {product && (
        <Box>
          <ProductDetailName product={product} />

          <Box sx={styles.productDetailCtaContainer}>
            <ProductDetailCTA product={product} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
