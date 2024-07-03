import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCollections = async () => {
  const response = await apiClient.get("/collections");
  return response.data;
};

export const getCollectionDetails = async (collectionId: string) => {
  const response = await apiClient.get(`/collections/${collectionId}`);
  return response.data;
};

export const getProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

export const getProductDetails = async (productId: string) => {
  const response = await apiClient.get(`/products/${productId}`);
  return response.data;
};

export const getSearchedProducts = async (query: string) => {
  const response = await apiClient.get(`/search/${query}`);
  return response.data;
};

export const getOrders = async (customerId: string) => {
  const response = await apiClient.get(`/orders/customers/${customerId}`);
  return response.data;
};

export const getRelatedProducts = async (productId: string) => {
  const response = await apiClient.get(`products/${productId}/related`);
  return response.data;
};
