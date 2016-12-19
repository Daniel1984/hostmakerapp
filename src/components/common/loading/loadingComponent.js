import React from 'react';
import './loading.scss';

function Loader({ message }) {
    return (
        <h1 className="loading">{message}</h1>
    )
}

export default Loader;
