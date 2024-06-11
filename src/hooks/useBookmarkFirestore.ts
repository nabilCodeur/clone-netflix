import { MediaEndpointApi } from "@/types";
import { z } from "zod";
import useFirestore from "./useFirestore";


const BookmarkShema = z.object({
  bookmarksMovieIds: z.array(z.number()),
  bookmarksTvIds: z.array(z.number()),
});
const useBookmarkFirestore = (userId: string | null | undefined , typeMedia:MediaEndpointApi, idMedia?:number | null) => {


  
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
    await isBookmarked()
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
    await isBookmarked()
  };

  const isBookmarked = async (
   
  ) => {
    if (!idMedia) return
    const initialBookmarks = await readBookmarks();
    return initialBookmarks.includes(idMedia);
  };

  const handleBookmark = async ()=>{
    const isBookmarkedInList = await isBookmarked()
    if (isBookmarkedInList){
      await removeBookmarkById()
    }
    else {
      await addBookmark()
    }
  }

  return { readBookmarks, addBookmark,isBookmarked , removeBookmarkById  , handleBookmark };
};

export default useBookmarkFirestore;
