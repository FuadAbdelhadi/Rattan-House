import axiosInstance from "./axiosInstance";


export const submitOrder = async (formData) => {
  const res = await axiosInstance.post("/api/submit_order.php", formData);
  return res.data;
};
