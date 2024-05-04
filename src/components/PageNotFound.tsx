import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>Vous vous êtes perdu ?</h1>
      <Link to={"/"}>
        Page d'accueil
      </Link>
    </div>
  )
}

export default PageNotFound
