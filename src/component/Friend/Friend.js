import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Friend = (props) => {
    const { name, username, email, address, phone, id } = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const handleFriendClick = () => {
        history.push(`/friend/${id}`);

    }
    return (
        <div style={friendStyle}>
            <h1>This is single friend</h1>
            <h2>{name}</h2>
            <h2>Username:{username}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Email: {email}</h2>
            <h2>address: {address.city}</h2>
            <Link to={`/friend/${id}`}>Visit me</Link>
            <br />
            <button onClick={handleFriendClick}>visit me </button>
        </div>
    );
};

export default Friend;