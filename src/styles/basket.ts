import { ComponentStyleConfig } from "@chakra-ui/react";

const Basket: ComponentStyleConfig = {
  parts: [
    "container",
    "imageContainer",
    "imageWrapper",
    "image",
    "infoWrapper",
    "closeIcon",
    "title",
    "innerDetailsWrapper",
    "flexWrapper",
  ],
  baseStyle: {
    container: {
      cursor: "pointer",
      display: "grid",
      gridTemplateColumns: "40% 60%",
      alignItems: "center",
      position: "relative",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      background: "#f0f0f0",
      borderRadius: "md",
    },
    imageWrapper: {
      width: "100%",
      height: "100%",
    },
    image: {
      objectFit: "contain",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      pr: 4,
      pl: 4,
    },
    infoWrapper: {
      pt: 4,
      pl: 2,
      position: "relative",
    },
    closeIcon: {
      position: "absolute",
      top: 10,
      right: 0,
    },
    title: {
      fontSize: "lg",
      fontWeight: "normal",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    innerDetailsWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pt: 4,
    },
    flexWrapper: {
      alignItems: "center",
      gap: 2,
      border: "1px solid #131313",
      display: "inline-flex",
      height: 8,
      borderRadius: 4,
      justifyContent: "space-between",
      pr: 2,
      pl: 2,
      width: "5.55556rem",
    },
  },
};

export default Basket;
