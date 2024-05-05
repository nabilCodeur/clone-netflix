import authentificationLogo from "@/assets/netflix-n.png"
import { Link } from 'react-router-dom'

const SignUpBanner = () => {
  return (
    <div className='absolute w-full top-2 left-2'>
    <header className='flex items-center justify-between pr-6'>
      <Link to={"/"}>
      <img src={authentificationLogo} alt="logo" className='size-14' />
      </Link>
      <nav>
        <Link to="login" className=' hover:underline hover:underline-offset-2'>Sign In</Link>
      </nav>
    </header>
    </div>
  )
}

export default SignUpBanner
