import React from 'react'
import { IUserInterface } from 'features/user/userInterface'

export interface IUserRow extends IUserInterface {
  deleteHandler?(id: number): any
}

// task 1, create a user row component with delete handler and display in storybook
const UserRow = (props: IUserRow) => {
  return <></>
}

export default UserRow
