import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditUser({ users, updateUser }) {
    const { id } = useParams();
    const history = useHistory();
    const user = users.find((user) => user.id === parseInt(id));

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setPhone(user.phone);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ id: parseInt(id), name, phone });
        history.push('/');
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
                <button type="button" onClick={() => history.push('/')}>Cancel</button>
            </form>
        </div>
    );
}

export default EditUser;
