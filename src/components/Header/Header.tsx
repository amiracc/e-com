import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  Box,
  useMultiStyleConfig,
  Link,
} from "@chakra-ui/react";
import { BasketIcon } from "../../ui/BasketIcon";
import { useBasket } from "../../context/BasketContext";
import { BasketItem } from "../Basket";

export const Header: React.FC = () => {
  const styles = useMultiStyleConfig("Header");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state } = useBasket();

  const items = state.items || [];

  const navigate = useNavigate();

  return (
    <Flex sx={styles.flexContainer}>
      <Box>
        <Link onClick={() => navigate("/")}>Home</Link>
      </Box>
      <Flex sx={styles.basketMenuItem} onClick={onOpen}>
        <BasketIcon />
        <Text>Bag</Text>
      </Flex>
      <Heading size="lg" sx={styles.heading}>
        E-Commerce
      </Heading>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>
          <DrawerBody>
            {items.length === 0 ? (
              <Text>Your basket is empty.</Text>
            ) : (
              items.map(({ product, quantity }) => (
                <BasketItem
                  key={product.id}
                  product={product}
                  quantity={quantity}
                />
              ))
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
