import { MediaEndpointApi } from "@/types";
import { z } from "zod";
import useFirestore from "./useFirestore";

const BookmarkShema = z.object({
  bookmarksMovieIds: z.array(z.number()),
  bookmarksTvIds: z.array(z.number()),
});
const useBookmarkFirestore = () => {
  const { readUserDocument, fireStoreUpdateDocument } = useFirestore("users");

  const readBookmarks = async (
    userId: string | null,
    typeMedia: MediaEndpointApi
  ) => {
    const bookMarksTypeFirestore =
      typeMedia === "movie" ? "bookmarksMovieIds" : "bookmarksTvIds";
    const ERROR_MESSAGE = "Impossible de lire les favoris";
    const bookmarks = await readUserDocument(userId ?? "", ERROR_MESSAGE)
      .then((data) => BookmarkShema.parse(data))
      .then((data) => data[bookMarksTypeFirestore]);
    return bookmarks;
  };

  const addBookmark = async (
    typeMedia: MediaEndpointApi,
    newId?: number,
    userId?: string | null
  ) => {
    const bookMarksTypeFirestore =
      typeMedia === "movie" ? "bookmarksMovieIds" : "bookmarksTvIds";

    if (!newId) throw new Error("Impossible d'ajouter le favori");
    await fireStoreUpdateDocument(userId ?? "", {
      [bookMarksTypeFirestore]: [newId],
    });
  };

  return { readBookmarks, addBookmark };
};

export default useBookmarkFirestore;
