import { ComponentStyleConfig } from "@chakra-ui/react";

const PDPTemplate: ComponentStyleConfig = {
  parts: ["grid", "stage", "info"],
  baseStyle: {
    flexContainer: {
      pt: 4,
      pb: 4,
      pr: 8,
      pl: 8,
      position: "relative",
      height: "80px",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    },
    basketMenuItem: {
      gap: 2,
      cursor: "pointer",
    },
    heading: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
};

export default PDPTemplate;
