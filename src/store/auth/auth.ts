import { AppDispatch, RootState } from '../store'
import { AuthState, SetErrorAction, SetUserAction } from './authInterfaces'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { checkErrorMessageType } from '../../utils/checkErrorMessageType'
import axios from 'axios'
import userService from '../../services/user.service'

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: ''
}

const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    currentUserRequested: (state) => {
      state.isLoading = true
    },
    currentUserRecieved: (state, action: SetUserAction) => {
      state.user = action.payload
      state.isLoading = false
    },
    userLoggedOut: (state) => {
      state.isAuth = false
      state.user = {} as IUser
    },
    authRequested: (state) => {
      state.isLoading = true
    },
    authRequestSuccess: (state) => {
      state.isAuth = true
      state.isLoading = false
    },
    authRequestFailed: (state, action: SetErrorAction) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: authReducer, actions } = authSlice
const {
  authRequested,
  authRequestFailed,
  userLoggedOut,
  authRequestSuccess,
  currentUserRecieved,
  currentUserRequested
} = actions

const loadCurrentUser = () => async (dispatch: AppDispatch) => {
  dispatch(currentUserRequested())
  try {
    const user = await localStorage.getItem('username')
    dispatch(currentUserRecieved({ username: user } as IUser))
    dispatch(authRequestSuccess())
  } catch (error) {
    dispatch(authRequestFailed(checkErrorMessageType(error)))
  }
}

const login = (payload: IUser) => async (dispatch: AppDispatch) => {
  const { username, password } = payload
  dispatch(authRequested())

  try {
    setTimeout(async () => {
      const data = await userService.fetchAll()
      const user = data.find(
        (u) => u.username === username && u.password === password
      )
      if (user) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', user.username)
        dispatch(currentUserRecieved(user))
        dispatch(authRequestSuccess())
      } else {
        dispatch(authRequestFailed('Unvalid username or password'))
      }
    }, 1000)
  } catch (error) {
    dispatch(authRequestFailed(checkErrorMessageType(error)))
  }
}

const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem('auth')
  localStorage.removeItem('username')
  dispatch(userLoggedOut())
}

export const dispatchAuthActions = { login, logout, loadCurrentUser }

export const getIsAuth = () => (state: RootState) => state.auth.isAuth
export const getAuthErrors = () => (state: RootState) => state.auth.error
export const getAuthLoadingStatus = () => (state: RootState) =>
  state.auth.isLoading
export const getCurrentUserName = () => (state: RootState) =>
  state.auth.user?.username

export default authReducer
