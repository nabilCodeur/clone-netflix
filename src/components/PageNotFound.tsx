import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className=''>
      <h1 className='text-2xl'>Vous vous êtes perdu ?</h1>
      <Link to={"/"}>
      <button className="p-2 text-center text-white uppercase bg-red-600 rounded-sm" onClick={handleError}>
        Retour à l'accueil
        </button>
       
      </Link>
      </div>
    </div>
  )
}

export default PageNotFound
