import React, { useEffect } from 'react'
import { useAppDispatch } from '../store'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './authHandlers'
import { setUser } from './authSlice'

const AuthObserver: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(setUser({
          uid: user?.uid,
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL
        }))
      } else {
        dispatch(setUser(null))
      }
    })
    return () => unsubscribe()
  }, [dispatch])
  return null
}

export default AuthObserver