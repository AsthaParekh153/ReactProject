
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersList from './usersList/users';

const AddUser = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log(name, phone);

        e.preventDefault();
        const newUser = { id: usersList.length + 1, name, phone };
        usersList.push(newUser);
        console.log(usersList);
        navigate('/');
    };

    return (
        <div>
            <h1>Add New User</h1>
            <form onSubmit={handleSubmit} className='adduser'>
                <label>
                    Name:
                    <input type="text" className='inputText' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text" className='inputText' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <button type="submit" className='sub-btn'>Submit</button>
                <button type="button" className='del-btn' onClick={() => navigate('/')}>Cancel</button>
            </form>

        </div>
    );
};

export default AddUser;
