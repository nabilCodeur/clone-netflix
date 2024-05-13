import { Button } from '@/components/ui/button'
import useBookmarkFirestore from '@/hooks/useBookmarkFirestore'
import  { Authentification, AuthentificationProvider } from '@/providers/authentificationProvider'
import { MediaEndpointApi } from '@/types'
import { Media } from '@/utils/clientApiList'
import  { useContext, useEffect } from 'react'

const NetflixHeaderOverview = ({media,mediaHeader}:{media:Media,mediaHeader:MediaEndpointApi}) => {
  const {user} =  useContext(Authentification) as AuthentificationProvider
  const {addBookmark ,checkMediaInFirestoreBookmark, removeBookmarkById, isBookmarkInList}=useBookmarkFirestore(user?.uid , mediaHeader,media.id)
  

  const handleBookmark = async ()=>{
    await checkMediaInFirestoreBookmark()
    if (isBookmarkInList){
      await removeBookmarkById()
    }
    else {
      await addBookmark()
    }
    
  }

  useEffect(() => {
    checkMediaInFirestoreBookmark()
  },[checkMediaInFirestoreBookmark]
  )
  
  return (
    <div className="absolute px-4 mt-4 ml-3 space-y-2 text-red-100 bottom-[-10px] sm:w-1/2  sm:bottom-3/4 sm:text-2xl translate-y-full">
    <h1 className="text-2xl text-white uppercase">
      {media?.name ? media?.title :"Titre inconnu"}
    </h1>
    <p className="font-bold line-clamp-4">
      {media?.overview ?? "Résumé indisponible"}
    </p>

    </div>
  )
}

export default NetflixHeaderOverview
