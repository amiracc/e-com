import axios from "axios";
import { Product } from "../interfaces/types";

// Creating an instance for reusability
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Sanitizing the products data to handle possible use-cases
const sanitizeProductsData = (data: Product[]): Product[] => {
  return data.map((product) => ({
    id: product.id,
    title: product.title || "Unnamed Product",
    price: product.price,
    description: product.description || "",
    category: product.category,
    image: product.image,
    rating: product.rating,
  }));
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get("/products");
  return sanitizeProductsData(response.data);
};

export const fetchProduct = async (productId: number): Promise<Product> => {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data;
};
