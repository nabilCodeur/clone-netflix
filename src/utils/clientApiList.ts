import { z } from "zod";
import {
  CategoryEndpointApiList,
  MediaEndpointApi
} from "../types";

export const 
MediaSchema = z.object({
  id: z.number(),
  backdrop_path: z.string().nullable().optional(),
  poster_path: z.string().optional(),
  overview: z.string(),
  title: z.string().optional(),
  name: z.string().optional(),
});





const ListMediaSchema = z.array(MediaSchema);

export const clientApiList = async (
  type: MediaEndpointApi,
  paramater: CategoryEndpointApiList
) => {
  const endpoint = `${type}/${paramater}`;

  const urlFetch = `${
    import.meta.env.VITE_API_MOVIE_DB_URL
  }/${endpoint}?api_key=${
    import.meta.env.VITE_API_KEY_TMDB
  }&page=1&language=fr-FR`;
  const data = await fetch(urlFetch)
    .then((res) => res.json())
    .then((data) => data.results)
    .then((data) => ListMediaSchema.parse(data))
    .then(data=>data.filter(item=>item.backdrop_path!=null || item.poster_path!==null));

  return data;
};

export type Media = z.infer<typeof MediaSchema>