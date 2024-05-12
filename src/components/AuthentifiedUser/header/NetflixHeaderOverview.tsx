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
    <div className="w-1/3 p-5 px-4 ml-3 space-y-2 bg-black/70 ">
    <h1 className="text-2xl uppercase">
      {media?.title ?? media?.name}
    </h1>
    <p className="font-bold text-justify indent-4 line-clamp-6">
      {media?.overview ?? "Résumé indisponible"}
    </p>
    <div className="mt-4 space-x-2 text-end">
      <Button className="uppercase bg-red-600">Lecture</Button>
      <Button className="uppercase " onClick={handleBookmark} >
        {isBookmarkInList?"Supprimer des favoris":"Ajouter à mes favoris"}
      </Button>
    </div>
    </div>
  )
}

export default NetflixHeaderOverview
