import { FirebaseError } from "firebase/app";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { z } from "zod";
import database from "../firebase/database";
import { MediaEndpointApi } from "@/types";

const BookmarkShema = z.object({
  bookmarksMovieIds:z.array(z.number()),
  bookmarksTvIds:z.array(z.number())
})

export default function useFirestore() {
  const fireStoreUpdateDocument = async (
    collectionName: string | null | undefined,
    documentId: string | null | undefined,
    data: object
  ) => {
    if (!documentId || !collectionName) return
    try {
      const documentRef = doc(database, collectionName ?? "", documentId);
      await updateDoc(documentRef, data);
      return { data: true };
    } catch (error) {
      return {
        error: {
          code: FirebaseError ?? "error",
          message: FirebaseError ?? "errorMessage",
        },
      };
    }
  };

  const createUserDocument = async (
    documentId: string | null,
    data: object
  ) => {
    const updateData = await fireStoreUpdateDocument(
      "users",
      documentId ?? "",
      data
    );
    if (!updateData?.error) return;

    const userRef = doc(database, "users", documentId ?? "");
    setDoc(userRef, data, { merge: true });
  };


  const readBookmarks = async ( mediaType:MediaEndpointApi,userId?:string)=>{
    const bookMarksTypeFirestore = mediaType==="movie"?"bookmarksMovieIds":"bookmarksTvIds"
    
    if (!userId) return
    const docRef = doc(database,"users",userId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
      const bookmarkData = docSnap.data()
    
      const validateBookmark = BookmarkShema.parse(bookmarkData)
      console.log(validateBookmark[bookMarksTypeFirestore])
     
      return validateBookmark[bookMarksTypeFirestore]
    }
    else {
      throw new Error ("Impossible d'obtenir les favoris")
    }
  }

  // const addBookmarkFirestore = async(userId:string,mediaType:MediaEndpointApi , newId:number)=>{
  //   const bookmarks = await readBookmarks(userId).then(bookmark=>bookmark[bookMarksTypeFirestore])
  // }

  return { createUserDocument , readBookmarks , fireStoreUpdateDocument};
}

