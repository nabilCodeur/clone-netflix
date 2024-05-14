import { MediaEndpointApi } from "@/types";
import { z } from "zod";
import useFirestore from "./useFirestore";
import React from "react";

const BookmarkShema = z.object({
  bookmarksMovieIds: z.array(z.number()),
  bookmarksTvIds: z.array(z.number()),
});
const useBookmarkFirestore = (userId: string | null | undefined , typeMedia:MediaEndpointApi, idMedia?:number | null) => {


  const [isBookmarkInList, setIsBookmarkInList] = React.useState(false)
  const { readUserDocument, fireStoreUpdateDocument } = useFirestore("users");
  

  const readBookmarks = async () => {
    const bookMarksTypeFirestore =
      typeMedia === "movie" ? "bookmarksMovieIds" : "bookmarksTvIds";
    const ERROR_MESSAGE = "Impossible de lire les favoris";
    const bookmarks = await readUserDocument(userId ?? "", ERROR_MESSAGE)
      .then((data) => BookmarkShema.parse(data))
      .then((data) => data[bookMarksTypeFirestore]);
    return bookmarks;
  };

  const addBookmark = async () => {
    if (!idMedia) return;

    const initialBookmarks = await readBookmarks();
    if (initialBookmarks.includes(idMedia)) return;

    const bookMarksTypeFirestore =
      typeMedia === "movie" ? "bookmarksMovieIds" : "bookmarksTvIds";

   
    await fireStoreUpdateDocument(userId ?? "", {
      [bookMarksTypeFirestore]: [...initialBookmarks, idMedia],
    });
    await checkMediaInFirestoreBookmark()
  };

  const removeBookmarkById = async () => {
    if (!idMedia) return
    const bookMarksTypeFirestore =
      typeMedia === "movie" ? "bookmarksMovieIds" : "bookmarksTvIds";
    const bookmarks = await readBookmarks();
    if (!bookmarks.includes(idMedia)) return;

   const updatedBookmarks = bookmarks.filter(bookmardId=>bookmardId!==idMedia)

    await fireStoreUpdateDocument(userId ?? "", {
      [bookMarksTypeFirestore]: updatedBookmarks,
    });
    await checkMediaInFirestoreBookmark()
  };

  const checkMediaInFirestoreBookmark = async (
   
  ) => {
    if (!idMedia) return
    const initialBookmarks = await readBookmarks();
    setIsBookmarkInList(initialBookmarks.includes(idMedia));
  };

  const handleBookmark = async ()=>{
    await checkMediaInFirestoreBookmark()
    if (isBookmarkInList){
      await removeBookmarkById()
    }
    else {
      await addBookmark()
    }
  }

  return { readBookmarks, addBookmark,  checkMediaInFirestoreBookmark , removeBookmarkById , isBookmarkInList , handleBookmark };
};

export default useBookmarkFirestore;
