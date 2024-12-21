import { AppDispatch } from "../store";
import { setError, setLoading, setUser } from "./authSlice";
import { app } from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const googleSignIn = async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true))
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    dispatch(setUser({uid: user?.uid, email: user?.email, displayName: user?.displayName, photoURL: user?.photoURL}))
  } catch (error: any) {
    dispatch(setError(error.message))
  }
}

export const emailPasswordLogin = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    console.log(email, password)
    dispatch(setLoading(true))
    const result = await signInWithEmailAndPassword(auth, email, password)
    const user = result?.user
    dispatch(setUser({uid: user?.uid, email: user?.email, displayName: user?.displayName, photoURL: user?.photoURL}))
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

export const emailPasswordRegister = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true))
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const user = result?.user
    dispatch(setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }))
  } catch (error: any) {
    dispatch(setError(error.message))
  }finally{
    dispatch(setLoading(false))
  }
}

export const logout = async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true))
    await signOut(auth)
    dispatch(setUser(null))
  } catch (error) {
    dispatch(setError(error.message))
  } finally{
    dispatch(setLoading(false))
  }
}