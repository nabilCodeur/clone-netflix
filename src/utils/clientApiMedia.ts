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

  const MOVIE_ID_GOZILLA = 823464
  const TV_ID_LAW_ORDER = 2734

  const alternativeMediaId = type ==="movie"? MOVIE_ID_GOZILLA :TV_ID_LAW_ORDER

  const alternativeUrlFetch = `${
    import.meta.env.VITE_API_MOVIE_DB_URL
  }/${type}/${alternativeMediaId}?api_key=${import.meta.env.VITE_API_KEY_TMDB}&language=fr-FR`;
 

  let data = await fetch(urlFetch)
    .then((res) => res.json())
    .then((data) => MediaSchema.parse(data))

  if (!data.backdrop_path || !data.poster_path) {
    data = await fetch(alternativeUrlFetch).then(res=>res.json()).then(data=>MediaSchema.parse(data))
  } 
  return data;
};
