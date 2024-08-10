import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Product } from "../interfaces/types";

type BasketAction =
  | { type: "ADD_TO_BASKET"; product: Product }
  | { type: "REMOVE_FROM_BASKET"; id: number }
  | { type: "INCREASE_QUANTITY"; id: number }
  | { type: "DECREASE_QUANTITY"; id: number };

interface BasketState {
  items: { product: Product; quantity: number }[];
}

const getInitialState = (): BasketState => {
  const savedItems = localStorage.getItem("basketItems");
  return {
    items: savedItems ? JSON.parse(savedItems) : [],
  };
};

const initialState: BasketState = getInitialState();

const saveToLocalStorage = (items: BasketState["items"]) => {
  localStorage.setItem("basketItems", JSON.stringify(items));
};

const basketReducer = (
  state: BasketState,
  action: BasketAction
): BasketState => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const { product } = action;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { product, quantity: 1 }];
      }
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }
    case "REMOVE_FROM_BASKET": {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== action.id
      );
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }
    case "INCREASE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.product.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }
    case "DECREASE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.product.id === action.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      saveToLocalStorage(updatedItems);
      return { items: updatedItems };
    }
    default:
      return state;
  }
};

const BasketContext = createContext<
  | {
      state: BasketState;
      dispatch: React.Dispatch<BasketAction>;
    }
  | undefined
>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  useEffect(() => {
    saveToLocalStorage(state.items);
  }, [state.items]);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
