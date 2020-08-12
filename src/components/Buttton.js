import React from 'react';

function Button(props) {
    return (
        <button
            className='btn btn-success ml-2'
            onClick={props.handleFormSubmit}
        >
            {props.name}
        </button>
    );
};

export default Button;