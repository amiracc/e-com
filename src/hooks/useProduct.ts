import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/store";

// Hook for getting one product
export const useProduct = (productId: number) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId,
  });
};
