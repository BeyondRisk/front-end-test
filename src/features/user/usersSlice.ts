import { createSlice } from '@reduxjs/toolkit'
import { IUserInterface } from './userInterface'
import { users } from 'dummyData'

export interface IUsersSlice {
  users: IUserInterface[]
  status: 'idle' | 'success' | 'loading' | 'failed'
  error: any
}

const initialState: IUsersSlice = {
  status: 'idle',
  error: null,
  users: users
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    // task 4... add extra reducers for deleteUserThunk
  },
  reducers: {}
})

export default userSlice.reducer

export const selectUsers = (state: any): any => state.users.users
