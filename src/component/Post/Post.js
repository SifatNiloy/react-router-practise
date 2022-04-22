import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/post/${id}`);

    }
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>visit posts</Link>
            <br />
            <button onClick={handleClick}>Click to see detail</button>

        </div>
    );
};

export default Post;