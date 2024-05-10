import { FirebaseError } from "firebase/app";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { z } from "zod";
import database from "../firebase/database";


const BookmarkShema = z.object({
  bookmarksMovieIds:z.array(z.number()),
  bookmarksTvIds:z.array(z.number())
})

export default function useFirestore(collectionName:string) {
  
  const fireStoreUpdateDocument = async (
 
    documentId: string | null | undefined,
    data: object
  ) => {
    if (!documentId ) return
    try {
      const documentRef = doc(database, collectionName, documentId);
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
      documentId ?? "",
      data
    );
    if (!updateData?.error) return;

    const userRef = doc(database, collectionName, documentId ?? "");
    setDoc(userRef, data, { merge: true });
  };

  const readUserDocument = async(userId:string , errorMessage?:string)=>{
    const docRef = doc(database,collectionName,userId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      const bookmarkData = docSnap.data()
      return bookmarkData
    }
    else {
      throw new Error (errorMessage??"Impossible de lire la donnée")
    }
  }






  return { createUserDocument ,  fireStoreUpdateDocument  , readUserDocument};
}

