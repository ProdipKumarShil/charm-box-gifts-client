import React from 'react'
import { useDispatch } from 'react-redux'
import { emailPasswordRegister, googleSignIn } from '../redux/firebase/authHandlers'
import { SubmitHandler, useForm } from 'react-hook-form'

type User = {
  email: string,
  password: string
}

const Register: React.FC = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm<User>()

  const onSubmit: SubmitHandler<User> = data => {
    emailPasswordRegister(data?.email, data?.password, dispatch)
  }

  return (
    <div className="max-w-xl mx-auto">
      <form  className='space-y-4 form-control' action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} className='input input-primary' type="text" />
        <input {...register('password')} className='input input-primary' type="text" />
        <button className='btn btn-accent'>Submit</button>
      </form>
      <div className="mt-6">
        <button className='btn btn-primary' onClick={() => googleSignIn(dispatch)}>Google Sign In</button>
      </div>
    </div>
  )
}

export default Register