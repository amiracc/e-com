import { ComponentStyleConfig } from "@chakra-ui/react";

const PDPTemplate: ComponentStyleConfig = {
  parts: ["grid", "stage", "info"],
  baseStyle: {
    grid: {
      minH: "calc(100vh - 80px)",
      gridTemplateColumns: "50% 1fr",
      gridTemplateAreas: {
        base: `"stage stage" "info info"`,
        lg: `"stage info"`,
      },
    },
    stage: {
      backgroundColor: "white",
      gridArea: "stage",
      display: "flex",
    },
    info: {
      gridArea: "info",
    },
  },
};

export default PDPTemplate;
