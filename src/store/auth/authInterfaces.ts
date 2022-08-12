import { IUser } from '../../models/IUser'
export interface AuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
}

export interface SetErrorAction {
  payload: string
}

export interface SetUserAction {
  payload: IUser
}
