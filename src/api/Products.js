import axiosInstance from "./axiosInstance";

export const getAllProducts = async () => {
  const res = await axiosInstance.get("/api/get_products.php");
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axiosInstance.get(`/api/get_single_product.php?${id}`);
  return res.data;
};

