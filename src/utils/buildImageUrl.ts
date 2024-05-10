import { ImageEndpointApi } from "../types";

export const buildImageUrl = (format: ImageEndpointApi, path?: string|null) => {
  return `${import.meta.env.VITE_IMAGE_URL}/${format}/${path??""}`;
};
