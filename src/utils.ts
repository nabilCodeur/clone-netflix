import {
  CategoryEndpointApi,
  ImageEndpointApi,
  MediaEndpointApi,
} from "./types";

export const clientApi = async (
  type: MediaEndpointApi,
  paramater: CategoryEndpointApi
) => {
  const endpoint = `${type}/${paramater}`;

  const urlFetch = `${
    import.meta.env.VITE_API_MOVIE_DB_URL
  }/${endpoint}?api_key=${import.meta.env.VITE_API_KEY_TMDB}&page=1`;
  const data = await fetch(urlFetch)
    .then((res) => res.json())
    .then((data) => data.results);

  return data;
};

export const buildImageUrl = (format: ImageEndpointApi, path: string) => {
  return `${import.meta.env.VITE_IMAGE_URL}/${format}/${path}`;
};
