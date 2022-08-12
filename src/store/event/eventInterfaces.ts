import { IEvent } from '../../models/IEvent'
import { IUser } from '../../models/IUser'

export interface EventState {
  guests: IUser[]
  events: IEvent[]
  isLoading: boolean
  error: string
}

export interface SetGuestsAction {
  payload: IUser[]
}

export interface SetEventsAction {
  payload: IEvent[]
}

export interface SetErrorAction {
  payload: string
}
