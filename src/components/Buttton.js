import React from 'react';
var value
function Button(props) {
    console.log(props)
    return (
        <button
            
            className='btn btn-success ml-2'
            onClick={
                value=props.value,
                props.handleFormSubmit
                }
        >
            {props.name}
        </button>
    );
};

export default Button;