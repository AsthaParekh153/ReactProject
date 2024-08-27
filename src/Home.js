import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usersList from './usersList/users';

const Home = () => {
    const [users, setUsers] = useState(usersList);

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className='table-container'>
            <div className='table-header'>
                <h2>Active Users</h2>
                <Link to="/add-user">
                    <button className='add-user-btn'>Add New User</button>
                </Link>
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/edit-user/${user.id}`}>
                                        <button className='edit'>Edit</button>
                                    </Link>
                                    <button  className='delete' onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
