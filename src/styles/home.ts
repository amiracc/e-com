import { ComponentStyleConfig } from "@chakra-ui/react";

const Home: ComponentStyleConfig = {
  parts: ["container", "wrapper", "input"],
  baseStyle: {
    container: {
      p: 4,
      backgroundColor: "#f0f0f0",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 2,
      pb: 4,
    },
    input: {
      width: "auto",
      border: "1px solid #e1e1e1",
      _hover: {
        border: "1px solid #c7c7c7",
      },
      _focus: {
        border: "1px solid #c7c7c7",
        boxShadow: "none",
      },
    },
  },
};

export default Home;
