import React from 'react'
import SignUpBanner from '../banner/SignUpBanner'
import FormSignup from './FormSignUp'

const SignupFrame = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-950'>Joining Netflix is easy.</h1>
      <h2 className='text-2xl'>Enter your password and you'll be watching in no time.</h2>
       <FormSignup/>
    </div>
  )
}

export default SignupFrame
