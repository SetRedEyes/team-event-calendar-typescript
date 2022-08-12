import { IEvent } from './../../models/IEvent'
import { AppDispatch, RootState } from './../store'
import { createSlice } from '@reduxjs/toolkit'
import {
  EventState,
  SetErrorAction,
  SetEventsAction,
  SetGuestsAction
} from './eventInterfaces'
import { checkErrorMessageType } from '../../utils/checkErrorMessageType'
import userService from '../../services/user.service'

const initialState: EventState = {
  events: [],
  guests: [],
  isLoading: false,
  error: ''
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    itemsRequested: (state) => {
      state.isLoading = true
    },
    guestsRecieved: (state, action: SetGuestsAction) => {
      state.guests = action.payload
      state.isLoading = false
    },
    eventsRecieved: (state, action: SetEventsAction) => {
      state.events = action.payload
      state.isLoading = false
    },
    itemsRequestFailed: (state, action: SetErrorAction) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: eventReducer, actions } = eventSlice

const { itemsRequested, itemsRequestFailed, guestsRecieved, eventsRecieved } =
  actions

const loadGuests = () => async (dispatch: AppDispatch) => {
  dispatch(itemsRequested)
  try {
    const data = await userService.fetchAll()
    dispatch(guestsRecieved(data))
  } catch (error) {
    dispatch(itemsRequestFailed(checkErrorMessageType(error)))
  }
}

const loadEvents = (userName: string) => async (dispatch: AppDispatch) => {
  dispatch(itemsRequested)
  try {
    const events = localStorage.getItem('events') || '[]'
    const json = JSON.parse(events) as IEvent[]
    const currentUserEvents = json.filter(
      (event) => event.author === userName || event.guest === userName
    )
    dispatch(eventsRecieved(currentUserEvents))
  } catch (error) {
    dispatch(itemsRequestFailed(checkErrorMessageType(error)))
  }
}

const createEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
  dispatch(itemsRequested)

  try {
    const events = localStorage.getItem('events') || '[]'
    const json = JSON.parse(events) as IEvent[]
    json.push(event)
    dispatch(eventsRecieved(json))
    localStorage.setItem('events', JSON.stringify(json))
  } catch (error) {
    dispatch(itemsRequestFailed(checkErrorMessageType(error)))
  }
}

export const dispatchEventActions = { loadGuests, createEvent, loadEvents }

export const getGuests = () => (state: RootState) => state.event.guests
export const getEvents = () => (state: RootState) => state.event.events

export default eventReducer
