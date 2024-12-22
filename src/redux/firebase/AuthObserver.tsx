import React, { useEffect } from 'react'
import { useAppDispatch } from '../store'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './authHandlers'
import { setUser } from './authSlice'

const AuthObserver: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user){
        dispatch(setUser({name: user.displayName, email: user?.email, imgUrl: user?.displayName, role: 'buyer'}))
      } else {
        dispatch(setUser(null))
      }
    })
    return () => unsubscribe()
  }, [dispatch])
  return null
}

export default AuthObserver