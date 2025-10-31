import axiosInstance from "./axiosInstance";

export const getAllCategories = async () => {
  const res = await axiosInstance.get("/api/get_category.php");
  return res.data;
};
