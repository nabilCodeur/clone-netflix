type CategoryEndpointApiList = "top_rated" | "popular" | "upcoming";
type CategoryEndpointApi = "latest";
type MediaEndpointApi = "tv" | "movie";
type ImageEndpointApi = "w500" | "original" | "w200";

type Bookmarks = {
  bookmarksMovieIds: number[];
  bookmarksTvIds: number[];
};

export type {
  Bookmarks,
  CategoryEndpointApi,
  CategoryEndpointApiList,
  ImageEndpointApi,
  MediaEndpointApi,
};
