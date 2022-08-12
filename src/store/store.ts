import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth'
import eventReducer from './event/event'

export const store = configureStore({
  reducer: { auth: authReducer, event: eventReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
