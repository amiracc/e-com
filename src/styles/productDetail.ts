import { ComponentStyleConfig } from "@chakra-ui/react";

const ProductDetail: ComponentStyleConfig = {
  baseStyle: {
    container: {
      mt: 8,
    },
    infoArea: {
      p: { base: 5, lg: 20 },
      w: "full",
      position: { base: "static", lg: "sticky" },
    },
    priceContainer: {
      mt: 6,
    },
    productDetailCtaContainer: {
      mt: 6,
      textAlign: "left",
    },
    productNameFlex: {
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexDir: "column",
      mt: 2,
    },
    nameHeading: {
      fontSize: "3xl",
    },
    productDetailCTA: {
      w: "full",
    },
    productDescription: {
      pt: 6,
    },
    imageContainer: {
      p: { base: 10, md: 0 },
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: { base: "250px", lg: "400px" },
    },
  },
};

export default ProductDetail;
