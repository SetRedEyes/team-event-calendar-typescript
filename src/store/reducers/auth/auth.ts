import { RootState } from './../../store'
import { AuthAction, AuthState } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AuthState = {
  isAuth: false
}

const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setAuth: (state, action: AuthAction) => {
      state.isAuth = action.payload
    }
  }
})

const { reducer: authReducer, actions } = authSlice

export const checkIsAuth = () => (state: RootState) => state.auth

export default authReducer
