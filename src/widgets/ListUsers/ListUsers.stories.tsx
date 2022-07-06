import ListUsers from './ListUsers'
import { IUserInterface } from 'features/user/userInterface'
import { users } from 'dummyData'

export default {
  label: 'Widgets/ListUsers',
  component: ListUsers
}

const Template = (args: IUserInterface): JSX.Element => (
  <ListUsers users={users} {...args} />
)
export const Standard: any = Template.bind({})
Standard.args = {}
