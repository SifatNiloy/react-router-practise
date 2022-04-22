import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/users/${friendId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    const handleClick = () => {
        history.push('/friends')
    }

    return (
        <div>
            <h2>Friend Detail coming soon: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h3>phone: {friend.phone}</h3>
            <h3>Website: {friend.website}</h3>
            <br />
            <button onClick={handleClick}>visit friends</button>
        </div>
    );
};

export default FriendDetail;