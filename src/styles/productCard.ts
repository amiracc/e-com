import { ComponentStyleConfig } from "@chakra-ui/react";

const ProductCard: ComponentStyleConfig = {
  baseStyle: ({ addedToCart }) => ({
    wrapper: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      background: "#f0f0f0",
      borderRadius: "md",
    },
    imageContainer: {
      width: "100%",
      height: "100%",
    },
    image: {
      objectFit: "contain",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      p: 10,
    },
    flexButtonContainer: {
      justifyContent: "center",
      position: "absolute",
      bottom: "4",
      width: "100%",
    },
    button: {
      backgroundColor: addedToCart ? "#2F8559" : "#f0f0f0",
      borderRadius: 30,
      width: "auto",
      color: addedToCart ? "white" : "black",
      _hover: {
        backgroundColor: addedToCart ? "#2F8559" : "#f5f5f5",
        color: addedToCart ? "white" : "black",
      },
    },
    infoWrapper: {
      pt: 4,
      pl: 2,
    },
    title: {
      fontSize: "lg",
      fontWeight: "normal",
    },
  }),
};

export default ProductCard;
