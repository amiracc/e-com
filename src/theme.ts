import { extendTheme } from "@chakra-ui/react";
import Button from "./styles/button";
import PDPTemplate from "./styles/pdpTemplate";
import ProductCard from "./styles/productCard";
import ProductDetail from "./styles/productDetail";
import Basket from "./styles/basket";
import Header from "./styles/header";

const theme = extendTheme({
  components: {
    Basket,
    Button,
    PDPTemplate,
    ProductCard,
    ProductDetail,
    Header,
  },
});

export default theme;
