import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => setUsers([...users, user]);
    const updateUser = (updatedUser) =>
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">User List</Link> | <Link to="/add-user">Add User</Link>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <UserTable users={users} deleteUser={deleteUser} />
                    </Route>
                    <Route path="/add-user">
                        <AddUser addUser={addUser} />
                    </Route>
                    <Route path="/edit-user/:id">
                        <EditUser users={users} updateUser={updateUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
