import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usersList, { updateUserInList } from './usersList/users';

const EditUser = ({ users, setUsers }) => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', phone: '' });


    useEffect(() => {
        console.log(id);
        const currentUser = usersList.find(user => user.id === parseInt(id));
        console.log(currentUser);
        if (currentUser) {
            setUser(currentUser);
        }
    }, [id, users]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        updateUserInList(user);
        navigate('/');
    };

    return (
        <div>
            <h1>Update - {user.name}</h1>
            <form onSubmit={handleSubmit} className='adduser'>
                <label>
                    Name:
                    <input
                        type="text"
                        className="inputText"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        className='inputText'
                        value={user.phone}
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit" className='update-btn'>Update</button>
                <button type="button" className='dis-btn' onClick={() => navigate('/')}>Discard Changes</button>
            </form>
        </div>
    );
};

export default EditUser;
