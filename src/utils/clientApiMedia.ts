import { CategoryEndpointApi, MediaEndpointApi } from "../types";
import { MediaSchema } from "./clientApiList";

export const clientApiMedia = async (
  type: MediaEndpointApi,
  parameter: CategoryEndpointApi | number
) => {
  const endpoint = `${type}/${parameter}`;
  const urlFetch = `${
    import.meta.env.VITE_API_MOVIE_DB_URL
  }/${endpoint}?api_key=${import.meta.env.VITE_API_KEY_TMDB}&language=fr-FR`;

  const data = await fetch(urlFetch)
    .then((res) => res.json())
    .then((data) => MediaSchema.parse(data));
  return data;
};
