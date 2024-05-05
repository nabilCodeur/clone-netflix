import netflixLogo from "@/assets/netflix-n.png"
import { Link } from 'react-router-dom'

const LoginBanner = () => {
  return (
    <header className='absolute top-2 left-6'>
      <Link to="/">
      <img src={netflixLogo} alt="logo" className='size-14'  />
      </Link>
    </header>
  )
}

export default LoginBanner
