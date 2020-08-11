import React from 'react';

function Button(props) {
    return (
    <button
    className='btn btn-success ml-2'
    onClick={props.handleFormSubmit}
    >Search
    </button>
    );
};

export default Button;