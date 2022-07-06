import { Action, configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkDispatch } from 'redux-thunk'
import usersSlice from './user/usersSlice'

const store = configureStore({
  reducer: {
    users: usersSlice
  },
  middleware: [thunk]
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, Action>
