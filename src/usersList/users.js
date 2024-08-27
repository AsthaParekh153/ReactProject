const usersList =
    [
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '098-765-4321' }
    ]
export default usersList;

export function updateUserInList(updatedUser) {
    const index = usersList.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
        usersList[index] = { ...usersList[index], ...updatedUser };
    }
}