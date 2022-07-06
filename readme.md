# Setup tasks

- Clone this repository
- npm install

# Commands you will need to know

- Run Storybook (npm run storybook)
- Run Next (npm run dev)

# Test Tasks

- Task 1: Create a user row component and display in storybook (src/components/UserRow)
- Task 2: Create a user list component and display in storybook (src/widgets/ListUsers)
- Task 3: Create a delete user async thunk (src/features/user/deleteUserThunk)
- Task 4: Add extra reducers to users slice to support delete user async thunk (src/features/user/usersSlice)
- Task 5: Display using Next.JS on root page the User List component and demo deleting a row (src/pages/index)

# Requirements

The user row should be a simple row going accross with a button for delete at the end. When it is clicked the user will be removed from the redux store and the page will re-render with one less item. When the user has theme dark the background of the row should be black and text white, otherwise when it is light the row should have background white and text black. The row should have rounded borders.

Do not use CSS/Less/Sass. Only use sx or style attributes on components.
