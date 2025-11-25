import axiosInstance from "./axiosInstance";

export const getAllGalleryImages = async () => {
  const res = await axiosInstance.get("/api/get_hotspot_images.php");
  return res.data;
};


export const getHotspotById = async (id) => {
  const res = await axiosInstance.get(`/api/get_hotspots.php?image_id=${id}`);
  return res.data;
};
