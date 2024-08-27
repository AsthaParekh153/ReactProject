import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddUser({ addUser }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ id: Date.now(), name, phone });
        history.push('/');
    };

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={() => history.push('/')}>Cancel</button>
            </form>
        </div>
    );
}

export default AddUser;
