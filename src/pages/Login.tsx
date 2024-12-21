import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailPasswordLogin } from '../redux/firebase/authHandlers'
import { useDispatch } from 'react-redux'

type User = {
  email: string,
  password: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm<User>()

  const onSubmit: SubmitHandler<User> = data => {
    emailPasswordLogin(data?.email, data?.password, dispatch)
  }
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <form  className='space-y-4 form-control' action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} className='input input-primary' type="text" />
        <input {...register('password')} className='input input-primary' type="text" />
        <button className='btn btn-accent'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Login