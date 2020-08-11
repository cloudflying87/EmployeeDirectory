import React from 'react';
import Button from './Buttton';

function SearchBar(props) {
    return (
        <form className='form'>
            <label htmlFor='search'>Search: </label>
            <input 
                onChange={props.handleInputChange}
                value={props.value}
                name='search'
                type='search'
                className='form-control col-10'
                placeholder='Filter Employees'
                id='search'
                />
        <Button handleFormSubmit={props.handleFormSubmit} />
        </form>
    )
}

export default SearchBar;