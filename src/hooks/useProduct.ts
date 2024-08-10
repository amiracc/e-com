import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/store";

export const useProduct = (productId: number) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId,
  });
};
