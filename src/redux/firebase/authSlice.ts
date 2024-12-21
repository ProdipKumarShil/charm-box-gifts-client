import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>){
      state.user = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>){
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>){
      state.error = action.payload
    }
  }
})

export const {setUser, setError, setLoading} = authSlice.actions
export default authSlice.reducer

