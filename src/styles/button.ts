import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontWeight: "normal",
  lineHeight: 1,
  bg: "#8ab891",
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

const variantSolidPDP = defineStyle(() => {
  return {
    bg: "black",
    color: "white",
    w: "100%",
  };
});

const variantSecondary = defineStyle(() => {
  return {
    bg: "white",
    color: "black",
    borderRadius: "full",
    border: "1px solid #e1e1e1",
    m: 0,
    minWidth: 24,
  };
});

const sizes = {
  sm: defineStyle({
    fontSize: "sm",
    px: 4,
    py: 2,
  }),
  md: defineStyle({
    fontSize: "md",
    px: 6,
    py: 3,
  }),
  lg: defineStyle({
    fontSize: "md",
    px: 8,
    py: 4,
  }),
};

// Multiple variants of button, in this case very similar in our actual code very different and many.
// Please check email images.
const variants = {
  solidPDP: variantSolidPDP,
  secondary: variantSecondary,
};

export default defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "solidPDP",
    colorScheme: "primary",
  },
});
