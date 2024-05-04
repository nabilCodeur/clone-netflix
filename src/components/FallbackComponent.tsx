import { Link } from "react-router-dom"

const FallbackComponent = () => {
  return (
    <div>
      Une erreur s'est produite
      <Link to="/">
        Retour à l'accueil
      </Link>
    </div>
  )
}

export default FallbackComponent
