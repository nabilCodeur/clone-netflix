type CategoryEndpointApiList = "top_rated" | "popular" | "upcoming";
type CategoryEndpointApi = "latest";
type MediaEndpointApi = "tv" | "movie";
type ImageEndpointApi = "w500" | "original";

type Bookmarks = {
  bookmarksMovieIds:number[],
  bookmarksTvIds:number[]
}

export type {
  CategoryEndpointApiList,
  CategoryEndpointApi,
  MediaEndpointApi,
  ImageEndpointApi,
  Bookmarks
};


