export interface AuthState {
  isAuth: boolean
}

export interface SetAuthAction{
  payload:boolean
}

export type AuthAction = SetAuthAction