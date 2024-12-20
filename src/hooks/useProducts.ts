import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/store";

// Hook for getting the products
export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
