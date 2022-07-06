import UserRow, { IUserRow } from './UserRow'

export default {
  label: 'Components/UserRow',
  component: UserRow
}

const Template = (args: IUserRow): JSX.Element => <UserRow {...args} />
export const Standard: any = Template.bind({})
Standard.args = {}
